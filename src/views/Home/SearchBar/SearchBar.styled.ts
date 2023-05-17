import styled from 'styled-components';
import { default as InputComponenet } from 'components/UI/Input/Input';

import { default as IconFA } from 'components/UI/Icon/Icon';

export const Container = styled('div')`
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
	align-items: center;
`;

export const Icon = styled(IconFA)`
	cursor: pointer;
`;

export const Input = styled(InputComponenet)`
	width: 300px;
`;
