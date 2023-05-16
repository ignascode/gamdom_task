import styled from 'styled-components';
import { default as ModalComponent } from 'components/Modal/Modal';

export const Modal = styled(ModalComponent)`
	width: calc(100vw - 64px);
`;

export const TopSection = styled('div')`
	display: flex;
`;

export const BottomSection = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;

export const Img = styled('img')`
	height: 400px;
	width: 600px;
	object-fit: fill;
	display: block;
`;

export const Title = styled('span')`
	font-size: 32px;
`;

export const Details = styled('div')``;

export const DetailName = styled('span')`
	font-size: 14px;
	font-weight: 700;
	margin-right: 8px;
`;

export const DetailValue = styled('span')`
	font-size: 12px;
`;
