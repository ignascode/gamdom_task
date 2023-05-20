import { MEDIA_QUERY } from 'consts';
import styled from 'styled-components';
import { default as CardLoadingComponent } from 'views/commonComp/CardLoading/CardLoading';

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

export const CardLoading = styled(CardLoadingComponent)`
	height: 427px;
	flex-basis: calc(20% - 16px);
	border-radius: 25px;
	margin-bottom: 16px;
`;

export const TextContainer = styled('div')`
	font-size: 16px;
	text-align: center;
`;
