import styled from 'styled-components';

export const ModalOverlay = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`;

export const ModalContent = styled('div')`
	background-color: #ffffff;
	overflow: hidden;
	border-radius: 25px;
	width: min-content;
`;
