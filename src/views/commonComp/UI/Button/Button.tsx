import React from 'react';
import { ButtonProps } from './Button.types';
import * as S from './Button.styled';

const Button: React.FC<ButtonProps> = (p) => (
	<S.Button {...p}>{p.children}</S.Button>
);

export default Button;
