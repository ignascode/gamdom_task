import { MEDIA_QUERY } from 'consts';
import styled from 'styled-components';
import { default as ModalComponent } from 'views/commonComp/Modal/Modal';
import { default as CardLoadingComponent } from 'views/commonComp/CardLoading/CardLoading';
import { CardLoadingImage } from 'views/commonComp/CardLoading/CardLoading.styled';

export const Modal = styled(ModalComponent)`
	width: calc(100vw - 64px);

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		width: calc(100vw - 128px);
	}
`;

export const TopSection = styled('div')`
	height: 400px;
	width: 600px;
	position: relative;
	overflow: hidden;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		height: 300px;
		width: 500px;
	}

	@media (max-width: ${MEDIA_QUERY.md}px) {
		height: 300px;
		width: 400px;
	}
`;

export const BottomSection = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 16px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		padding: 12px;
	}
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

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		font-size: 16px;
	}
`;

export const DetailName = styled('span')`
	font-size: 14px;
	font-weight: 700;
	margin-right: 8px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		font-size: 12px;
	}
`;

export const DetailValue = styled('span')`
	font-size: 12px;

	@media (max-width: ${MEDIA_QUERY.lg}px) {
		font-size: 10px;
	}
`;

export const CardLoading = styled(CardLoadingComponent)`
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

	${CardLoadingImage} {
		height: 400px;
		width: 100%;
	}
`;
