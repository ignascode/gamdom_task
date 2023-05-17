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
	align-items: center;
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
		`}

	.card-loading__image {
		width: 80px;
		height: 80px;
		background-color: #ccc;
		border-radius: 4px;
	}

	.card-loading__content {
		margin-left: 16px;
		flex-grow: 1;
	}

	.card-loading__title {
		width: 60%;
		height: 16px;
		margin-bottom: 8px;
		background-color: #ccc;
		border-radius: 4px;
	}

	.card-loading__description {
		width: 80%;
		height: 12px;
		background-color: #ccc;
		border-radius: 4px;
	}
`;
