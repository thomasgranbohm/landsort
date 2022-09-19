import { useOverlayTriggerState } from '@react-stately/overlays';
import clsx from 'clsx';
import { useRef } from 'react';
import { FocusScope, useButton, usePreventScroll } from 'react-aria';

import Anchor from 'components/Anchor/Anchor';
import Image from 'components/Image/Image';

import { getSlug, normalize } from 'utils/functions';
import { Fragments, Strapi } from 'utils/types';

import classes from './Navigation.module.scss';

interface NavigationProps {
	logo: Strapi.V4Wrapper<Fragments.Media>;
	menus: Fragments.Menu[];
}

const Navigation = ({ logo, menus }: NavigationProps) => {
	const state = useOverlayTriggerState({});

	const buttonRef = useRef();
	const { buttonProps } = useButton(
		{
			onPress: () => state.toggle(),
		},
		buttonRef
	);

	usePreventScroll({ isDisabled: !state.isOpen });

	return (
		<div
			className={clsx(
				classes['container'],
				state.isOpen && classes['open']
			)}
		>
			<FocusScope contain={state.isOpen}>
				<Anchor href="/" className={classes['logo-container']}>
					<Image
						className={classes['logo']}
						{...normalize(logo)}
						layout="fill"
						objectFit="contain"
						objectPosition={'left'}
					/>
				</Anchor>
				<button
					{...buttonProps}
					ref={buttonRef}
					className={classes['hamburger']}
				>
					hamburger
				</button>
				<ul className={clsx(classes['menu'])}>
					{menus.map(({ pages, title }, i) => (
						<li className={classes['item']} key={i}>
							<p className={classes['title']} tabIndex={0}>
								<b>{title}</b>
								<span className={classes['icon']}>&gt;</span>
							</p>
							<ul className={classes['sub-menu']}>
								{normalize<Fragments.MenuItem[]>(pages).map(
									({ title, parent, slug }, i) => (
										<li key={i} className={classes['item']}>
											<Anchor
												className={classes['title']}
												clean
												href={`/${getSlug({
													parent,
													slug,
												}).join('/')}`}
											>
												{title}
											</Anchor>
										</li>
									)
								)}
							</ul>
						</li>
					))}
				</ul>
			</FocusScope>
		</div>
	);
};

export default Navigation;
