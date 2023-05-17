import React from 'react';
import * as S from './CardLoading.styled';
// import { CardLoadingProps } from './CardLoading.types';

const CardLoading: React.FC<{ className: string }> = (p) => {
	return (
		<S.CardLoadingContainer $className={p.className}>
			<div className="card-loading__image"></div>
			<div className="card-loading__content">
				<div className="card-loading__title"></div>
				<div className="card-loading__description"></div>
			</div>
		</S.CardLoadingContainer>
	);
};

export default CardLoading;
