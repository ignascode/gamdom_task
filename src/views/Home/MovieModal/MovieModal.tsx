import React from 'react';
import { MovieModalProps } from './MovieModal.types';
import { observer } from 'mobx-react-lite';
import useStore from 'store/store';
import * as S from './MovieModal.styled';
import CardLoading from 'components/CardLoading/CardLoading';

const MovieModal: React.FC<MovieModalProps> = observer((p) => {
	const GS = useStore();

	React.useEffect(() => {
		const fetch = async () => {
			if (!p.imdbId) return;
			await GS.getMovieByImdbId(p.imdbId);
		};

		fetch();
	}, [p.imdbId]);

	if (!GS.movieDetails) return <></>;

	const filterEntries = (key: string, value: string) => {
		if (key === 'Poster') return false;
		if (key === 'Title') return false;
		if (key === 'Ratings') return false;
		if (key === 'imdbID') return false;
		if (key === 'Response') return false;
		if (value === 'N/A') return false;
		return true;
	};

	const capitalizeFirstLetter = (str: string) => {
		if (str && str.length > 0) {
			return str
				.replace(/([a-z])([A-Z])/g, '$1 $2')
				.replace(/^./, str[0].toUpperCase());
		}
		return str;
	};

	return (
		<S.Modal
			isOpen={p.isOpen}
			onClose={p.onClose}
			loading={GS.movieDetailsLoading}
			loadingComponent={<CardLoading className="movie-modal" />}
		>
			<S.TopSection>
				<S.Img src={GS.movieDetails.Poster} />
			</S.TopSection>
			<S.BottomSection>
				<S.Title>{GS.movieDetails.Title}</S.Title>
				{Object.entries(GS.movieDetails)
					.filter((entry) =>
						filterEntries(entry[0], entry[1])
					)
					.map((entry) => (
						<S.Details>
							<S.DetailName>
								{capitalizeFirstLetter(
									entry[0]
								)}
								:
							</S.DetailName>
							<S.DetailValue>
								{entry[1]}
							</S.DetailValue>
						</S.Details>
					))}
			</S.BottomSection>
		</S.Modal>
	);
});

export default MovieModal;
