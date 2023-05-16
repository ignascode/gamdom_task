import styled from 'styled-components';

export const Input = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const InputBox = styled('input')`
	border-radius: 30px;
	border: 1px solid #cccccc;
	height: 32px;
	text-indent: 16px;
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
