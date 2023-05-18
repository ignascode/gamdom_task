import { MEDIA_QUERY } from 'consts';
import styled from 'styled-components';

export const MoviesCards = styled('div')`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${MEDIA_QUERY.md}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${MEDIA_QUERY.sm}px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const ErrorContainer = styled('div')`
	display: flex;
	font-size: 16px;
	justify-content: center;
`;
