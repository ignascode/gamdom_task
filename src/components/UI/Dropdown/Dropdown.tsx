import React from 'react';
import { DropdownProps } from './Dropdown.types';
import * as S from './Dropdown.styled';
import OutsideClickListener from './OutsideClickListiner/OutsideClickListiner';

const Dropdown: React.FC<DropdownProps> = (p) => {
	const [open, setOpen] = React.useState(false);

	const handelOptionSelect = (option: string) => {
		p.onSelect(option);
		setOpen(false);
	};

	const handleOutsideClick = () => {
		setOpen(false);
	};

	return (
		<S.DropdownContainer>
			<S.DropdownButton onClick={() => setOpen(!open)}>
				{p.selected || <S.ButtonText>Type</S.ButtonText>}
			</S.DropdownButton>
			<OutsideClickListener onOutsideClick={handleOutsideClick}>
				<S.DropdownList $open={open}>
					{p.options.map((option, index) => (
						<S.DropdownItem
							key={index}
							onClick={() =>
								handelOptionSelect(option)
							}
						>
							{option}
						</S.DropdownItem>
					))}
				</S.DropdownList>
			</OutsideClickListener>
		</S.DropdownContainer>
	);
};

export default Dropdown;
