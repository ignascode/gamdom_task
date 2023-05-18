import styled from 'styled-components';
import { default as InputComponenet } from 'views/commonComp/UI/Input/Input';
import { default as DropdownComponent } from 'views/commonComp/UI/Dropdown/Dropdown';
import { default as ButtonComponent } from 'views/commonComp/UI/Button/Button';
import { default as IconFA } from 'views/commonComp/UI/Icon/Icon';
import { MEDIA_QUERY } from 'consts';

export const Container = styled('div')`
	display: flex;
	margin-bottom: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		flex-wrap: wrap;
		margin-bottom: initial;
	}
`;

export const Icon = styled(IconFA)`
	cursor: pointer;
	margin: 4px;
`;

export const Input = styled(InputComponenet)`
	width: 550px;
	margin-right: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		width: 100%;
		margin-bottom: 16px;
		margin-right: initial;
	}
`;

export const Dropdown = styled(DropdownComponent)`
	margin-right: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		margin-bottom: 16px;
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
