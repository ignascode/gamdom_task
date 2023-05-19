import React from 'react';
import { OutsideClickListenerProps } from './OutsideClickListiner.types';

const OutsideClickListener: React.FC<OutsideClickListenerProps> = ({
	onOutsideClick,
	children,
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	const handleClickOutside = React.useCallback(
		(event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				onOutsideClick();
			}
		},
		[onOutsideClick]
	);

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleClickOutside]);

	return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickListener;
