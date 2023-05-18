import { MEDIA_QUERY } from 'consts';
import styled from 'styled-components';

export const Container = styled('div')`
	padding: 32px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		padding: 16px;
	}
`;
