import React from 'react';
import * as S from './CardLoading.styled';
// import { CardLoadingProps } from './CardLoading.types';

const CardLoading: React.FC<{}> = () => {
	return (
		<S.CardLoadingContainer>
			<div className="card-loading__image"></div>
			<div className="card-loading__content">
				<div className="card-loading__title"></div>
				<div className="card-loading__description"></div>
			</div>
		</S.CardLoadingContainer>
	);
};

export default CardLoading;
