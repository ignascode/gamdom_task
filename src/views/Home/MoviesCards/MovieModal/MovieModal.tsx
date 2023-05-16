import React from 'react';
import { MovieModalProps } from './MovieModal.types';

import { getMovieByImdbId } from 'services/api';
import { DetailedMovie } from 'types';
import * as S from './MovieModal.styled';

const MovieModal: React.FC<MovieModalProps> = (p) => {
	const [movieDetails, setMovieDetails] = React.useState<DetailedMovie>();

	React.useEffect(() => {
		const fetch = async () => {
			if (!p.imdbId) return;
			const res = await getMovieByImdbId(p.imdbId);
			setMovieDetails(res);
		};

		fetch();
	}, [p.imdbId]);

	if (!movieDetails) return <></>;

	const filterEntries = (key: string, value: string) => {
		if (key === 'Poster') return false;
		if (key === 'Title') return false;
		if (key === 'Ratings') return false;
		if (key === 'imdbID') return false;
		if (key === 'Response') return false;
		if (value === 'N/A') return false;
		return true;
	};

	return (
		<S.Modal isOpen={p.isOpen} onClose={p.onClose}>
			<S.TopSection>
				<S.Img src={movieDetails.Poster} />
			</S.TopSection>
			<S.BottomSection>
				<S.Title>{movieDetails.Title}</S.Title>
				{Object.entries(movieDetails)
					.filter((entry) =>
						filterEntries(entry[0], entry[1])
					)
					.map((entry) => (
						<S.Details>
							<S.DetailName>
								{entry[0]}:
							</S.DetailName>
							<S.DetailValue>
								{entry[1]}
							</S.DetailValue>
						</S.Details>
					))}
			</S.BottomSection>
		</S.Modal>
	);
};

export default MovieModal;
