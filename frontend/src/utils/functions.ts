type TClass = string | [className: string, condition?: boolean] | undefined;

export const concat = (...classes: Array<TClass>) =>
	classes
		.map((c) => {
			if (c == undefined) return undefined;
			if (typeof c === 'string') {
				return c;
			}
			if (typeof c === 'boolean') return undefined;
			const [className, condition] = c;
			if (condition === undefined) return className;
			else if (condition === true) return className;
			return undefined;
		})
		.filter((c) => !!c)
		.join(' ');
