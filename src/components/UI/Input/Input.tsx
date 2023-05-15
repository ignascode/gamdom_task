import React from 'react';
import * as S from './Input.styled';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ lable, ...rest }) => {
	return (
		<S.Input>
			{lable && <S.Lable>{lable}</S.Lable>}
			<S.InputBox {...rest} />
		</S.Input>
	);
};

export default Input;
