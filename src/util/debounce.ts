type DebounceFunction<T extends (...args: any[]) => any> = (
	...args: Parameters<T>
) => void;

const debounce = <T extends (...args: any[]) => any>(
	func: T,
	delay: number
): DebounceFunction<T> => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>): void => {
		clearTimeout(timeoutId);

		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

export default debounce;
