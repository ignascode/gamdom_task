import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled('div')<{ $loading: boolean }>`
	border: 4px solid #f3f3f3;
	border-top: 4px solid #3498db;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: ${spinAnimation} 1s linear infinite;
	margin: 0 auto;
	display: ${(p) => (p.$loading ? 'block' : 'hidden')};
`;
