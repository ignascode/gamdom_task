import { MEDIA_QUERY } from 'consts';
import styled, { css, keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardLoadingContainer = styled('div')<{ $className: string }>`
	display: flex;
	flex-direction: column;
	padding: 16px;
	background-color: #f5f5f5;
	animation: ${fadeInAnimation} 0.3s ease-in-out;
	box-sizing: border-box;
	border: 1px solid #e0e0e0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
	overflow: hidden;

	${(p) =>
		p.$className.includes('movie-card') &&
		css`
			height: 427px;
			flex-basis: calc(20% - 16px);
			border-radius: 25px;
			margin-right: 16px;
			margin-bottom: 16px;
		`}

	${(p) =>
		p.$className.includes('movie-modal') &&
		css`
			height: 850px;
			width: 600px;

			@media (max-width: ${MEDIA_QUERY.lg}px) {
				height: 750px;
				width: 500px;
			}

			@media (max-width: ${MEDIA_QUERY.md}px) {
				height: 650px;
				width: 400px;
			}
		`}
`;

export const CardLoadingImage = styled('div')<{ $className: string }>`
	width: 160px;
	height: 160px;
	margin-bottom: 16px;
	background-color: #ccc;
	border-radius: 4px;

	${(p) =>
		p.$className.includes('movie-modal') &&
		css`
			height: 400px;
			width: 100%;
		`}
`;

export const CardLoadingContent = styled('div')`
	flex-grow: 1;
`;

export const CardLoadingTitle = styled('div')`
	width: 60%;
	height: 16px;
	margin-bottom: 8px;
	background-color: #ccc;
	border-radius: 4px;
`;

export const CardLoadingDescription = styled('div')`
	width: 100%;
	height: 12px;
	background-color: #ccc;
	border-radius: 4px;
	margin-bottom: 8px;
`;
