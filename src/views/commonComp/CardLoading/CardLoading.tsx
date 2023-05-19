import React from 'react';
import * as S from './CardLoading.styled';
import { CardLoadingProps } from './CardLoading.types';

const CardLoading: React.FC<CardLoadingProps> = ({
	descriptionElements,
	...p
}) => {
	return (
		<S.CardLoadingContainer {...p}>
			<S.CardLoadingImage />
			<S.CardLoadingContent>
				<S.CardLoadingTitle />
				<S.CardLoadingDescription />
				{descriptionElements &&
					[...Array(descriptionElements)].map(() => (
						<S.CardLoadingDescription />
					))}
			</S.CardLoadingContent>
		</S.CardLoadingContainer>
	);
};

export default CardLoading;
