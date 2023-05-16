import React from 'react';
import * as S from './Input.styled';
import { InputProps } from './Input.types';
import { observer } from 'mobx-react-lite';

const Input: React.FC<InputProps> = observer(({ lable, icon, ...rest }) => {
	return (
		<S.Input>
			{lable && <S.Lable>{lable}</S.Lable>}
			<S.InputBox {...rest} />
			{icon && (
				<S.IconContainer>
					<S.Icon icon={icon} />
				</S.IconContainer>
			)}
		</S.Input>
	);
});

export default Input;
