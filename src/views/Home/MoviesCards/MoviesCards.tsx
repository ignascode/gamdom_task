import React from 'react';
import * as S from './MoviesCards.styled';
import { observer } from 'mobx-react-lite';
import useStore from 'store/store';
import MovieCard from 'views/Home/MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';
import CardLoading from 'components/CardLoading/CardLoading';

const MoviesCards: React.FC = observer(() => {
	const GS = useStore();

	const [modalOpen, setModalOpen] = React.useState(false);
	const [imdbId, setImdbId] = React.useState<string>();

	const handleOpenModal = (imdbId: string) => {
		setImdbId(imdbId);
		setModalOpen(true);
	};

	if (GS.error.requestError)
		return <S.ErrorContainer>{GS.error.requestError}</S.ErrorContainer>;

	if (GS.error.apiError)
		return <S.ErrorContainer>{GS.error.apiError}</S.ErrorContainer>;

	return (
		<>
			<S.MoviesCards>
				{GS.moviesLoading
					? [...Array(10)].map(() => (
							<CardLoading className="movie-card" />
					  ))
					: GS.movies.map((movie, index) => (
							<MovieCard
								key={index}
								{...movie}
								onClick={() => {
									handleOpenModal(
										movie.imdbID
									);
								}}
							/>
					  ))}
			</S.MoviesCards>
			<MovieModal
				isOpen={modalOpen}
				onClose={() => setModalOpen(false)}
				imdbId={imdbId}
			/>
		</>
	);
});

export default MoviesCards;
