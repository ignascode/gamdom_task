import React from 'react';
import { OutsideClickListenerProps } from './OutsideClickListiner.types';

const OutsideClickListener: React.FC<OutsideClickListenerProps> = ({
	onOutsideClick,
	children,
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			containerRef.current &&
			!containerRef.current.contains(event.target as Node)
		) {
			onOutsideClick();
		}
	};

	React.useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickListener;
