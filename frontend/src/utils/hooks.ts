import { useEffect, useState } from 'react';

type Breakpoints =
	| 'small'
	| 'medium'
	| 'large'
	| 'extra-large'
	| 'extra-extra-large';

export const useBreakpoint = () => {
	const [breakpoint, setBreakpoint] = useState<Breakpoints>(null);

	const defineBreakpoint = () => {
		const width = window.innerWidth;
		if (width < 768) {
			setBreakpoint('small');
		} else if (width < 960) {
			setBreakpoint('medium');
		} else if (width < 1400) {
			setBreakpoint('large');
		} else if (width < 2400) {
			setBreakpoint('extra-large');
		} else if (width >= 2400) {
			setBreakpoint('extra-extra-large');
		} else {
			setBreakpoint(null);
		}
	};

	useEffect(() => {
		defineBreakpoint();
		window.addEventListener('resize', defineBreakpoint);
		return () => window.removeEventListener('resize', defineBreakpoint);
	}, []);

	return breakpoint;
};
