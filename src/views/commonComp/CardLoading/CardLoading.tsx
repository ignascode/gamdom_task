import React from 'react';
import * as S from './CardLoading.styled';

const CardLoading: React.FC<{ className: string }> = (p) => {
	return (
		<S.CardLoadingContainer $className={p.className}>
			<S.CardLoadingImage $className={p.className} />
			<S.CardLoadingContent>
				<S.CardLoadingTitle />
				<S.CardLoadingDescription />
				{p.className === 'movie-modal' && (
					<>
						<S.CardLoadingDescription />
						<S.CardLoadingDescription />
						<S.CardLoadingDescription />
						<S.CardLoadingDescription />
					</>
				)}
			</S.CardLoadingContent>
		</S.CardLoadingContainer>
	);
};

export default CardLoading;
