import React from 'react';
import * as S from './MoviesCards.styled';
import { observer } from 'mobx-react-lite';
import useStore from 'store/store';
import Card from 'components/Card/Card';
// import { MoviesCardsProps } from './MoviesCards.typed';

const MoviesCards: React.FC = observer(() => {
	const GS = useStore();

	if (GS.movies.length === 0) return <div>Search for movies</div>;

	return (
		<S.MoviesCards>
			{GS.movies.map((movie) => (
				<Card {...movie} />
			))}
		</S.MoviesCards>
	);
});

export default MoviesCards;
