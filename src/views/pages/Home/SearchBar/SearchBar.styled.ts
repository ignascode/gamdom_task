import styled from 'styled-components';
import { default as InputComponenet } from 'views/commonComp/UI/Input/Input';
import { default as ButtonComponent } from 'views/commonComp/UI/Button/Button';
import { default as IconFA } from 'views/commonComp/UI/Icon/Icon';
import { MEDIA_QUERY } from 'consts';

export const Container = styled('div')`
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
	align-items: center;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		flex-direction: column;
	}
`;

export const Icon = styled(IconFA)`
	cursor: pointer;
	margin: 4px;
`;

export const Input = styled(InputComponenet)`
	/* width: 300px; */
	margin-right: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		margin-bottom: 16px;
		width: 100%;
	}
`;

export const Button = styled(ButtonComponent)`
	margin-right: 16px;
	display: flex;
	align-items: center;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		margin-bottom: 16px;
	}
`;
