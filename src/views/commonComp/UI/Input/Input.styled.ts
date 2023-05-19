import styled from 'styled-components';
import { default as FAIcon } from '../Icon/Icon';

export const Input = styled('div')`
	position: relative;
`;

export const InputBox = styled('input')`
	border-radius: 30px;
	border: 1px solid #cccccc;
	height: 32px;
	text-indent: 26px;
	width: 100%;
	padding: 0;

	&:focus {
		outline: none;
	}
`;

export const IconContainer = styled('span')`
	position: absolute;
	top: 45%;
	left: 10px;
	transform: translateY(-50%);
	color: #999;
`;

export const Icon = styled(FAIcon)`
	width: 14px;
	height: 14px;
`;
