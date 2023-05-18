import styled from 'styled-components';

const CONTAINER_WIDTH = 150;

export const DropdownContainer = styled('div')`
	position: relative;
	display: inline-block;
	width: ${CONTAINER_WIDTH}px;
	margin-right: 16px;
`;

export const DropdownButton = styled('button')`
	background-color: #ffffff;
	border: 1px solid #cccccc;
	border-radius: 30px;
	padding: 8px 12px;
	cursor: pointer;
	width: ${CONTAINER_WIDTH}px;
	text-align: left;
	text-transform: capitalize;
	height: 36px;
`;

export const ButtonText = styled('span')`
	color: grey;
`;

export const DropdownList = styled('ul')<{ $open: boolean }>`
	position: absolute;
	top: 100%;
	left: 0;
	background-color: #ffffff;
	border: 1px solid #cccccc;
	border-radius: 15px;
	padding: 0;
	margin: 0;
	list-style: none;
	display: ${({ $open }) => ($open ? 'block' : 'none')};
	width: ${CONTAINER_WIDTH}px;
	overflow: hidden;
`;

export const DropdownItem = styled('li')`
	padding: 8px 12px;
	cursor: pointer;
	width: ${CONTAINER_WIDTH}px;
	text-transform: capitalize;
	font-family: 'Arial';
	font-size: 13px;

	&:hover {
		background-color: #f2f2f2;
	}
`;
