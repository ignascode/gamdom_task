import React from 'react';
import * as S from './Input.styled';
import { InputProps } from './Input.types';
import { observer } from 'mobx-react-lite';

const Input: React.FC<InputProps> = observer(
	({ icon, placeholder, value, ...rest }) => {
		return (
			<S.Input {...rest}>
				<S.InputBox placeholder={placeholder} value={value} />
				{icon && (
					<S.IconContainer>
						<S.Icon icon={icon} />
					</S.IconContainer>
				)}
			</S.Input>
		);
	}
);

export default Input;
