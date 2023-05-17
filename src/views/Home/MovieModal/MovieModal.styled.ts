import styled from 'styled-components';
import { default as ModalComponent } from 'components/Modal/Modal';

export const Modal = styled(ModalComponent)`
	width: calc(100vw - 64px);
`;

export const TopSection = styled('div')`
	height: 400px;
	width: 600px;
	position: relative;
	overflow: hidden;
`;

export const BottomSection = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;

export const ImgWrapper = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const Img = styled('img')`
	width: 100%;
	height: 100%;
	object-fit: fill;
`;

export const Title = styled('span')`
	font-size: 32px;
`;

export const DetailName = styled('span')`
	font-size: 14px;
	font-weight: 700;
	margin-right: 8px;
`;

export const DetailValue = styled('span')`
	font-size: 12px;
`;
