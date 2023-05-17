import styled from 'styled-components';
import { default as FAIcon } from '../Icon/Icon';

export const Input = styled('div')`
	position: relative;
	/* display: flex;
	flex-direction: column; */
`;

export const InputBox = styled('input')`
	border-radius: 30px;
	border: 1px solid #cccccc;
	height: 32px;
	text-indent: 26px;
	margin-right: 16px;

	&:focus {
		outline: none;
	}
`;

export const Lable = styled('span')`
	font-size: 14px;
	margin-bottom: 8px;
	font-weight: 400;
	margin-left: 12px;
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
