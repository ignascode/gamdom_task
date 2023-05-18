import React from 'react';
import * as S from './MoviesCards.styled';
import { observer } from 'mobx-react-lite';
import useStore from 'store/store';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';
import CardLoading from 'views/commonComp/CardLoading/CardLoading';

const MoviesCards: React.FC = observer(() => {
	const GS = useStore();

	const [modalOpen, setModalOpen] = React.useState(false);
	const [imdbId, setImdbId] = React.useState<string>();

	const handleOpenModal = (imdbId: string) => {
		setImdbId(imdbId);
		setModalOpen(true);
	};

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
