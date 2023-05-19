import React from 'react';
import { MovieModalProps } from './MovieModal.types';
import { observer } from 'mobx-react-lite';
import useStore from 'store/store';
import * as S from './MovieModal.styled';
import not_found_img from 'assets/image_not_available.png';
import { NA } from 'consts';
import capitalizeFirstLetter from 'util/capitalizeFirstLetter';
import { runInAction } from 'mobx';

const MovieModal: React.FC<MovieModalProps> = observer((p) => {
	const GS = useStore();

	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		const fetch = async () => {
			if (!p.imdbId) return;

			setIsLoading(true);
			try {
				const res = await GS.getMovieDetailsByImdbId(p.imdbId);
				runInAction(() => {
					GS.movieDetails = res;
				});
			} catch (e) {
				console.error('Error while getting movie details', e);
			} finally {
				setIsLoading(false);
			}
		};

		fetch();
	}, [p.imdbId, GS]);

	if (!GS.movieDetails) return <></>;

	const filterEntries = (key: string, value: string) => {
		const DISPLAY_KEYS = [
			'Actors',
			'Awards',
			'BoxOffice',
			'Country',
			'DVD',
			'Director',
			'Genre',
			'Language',
			'Plot',
			'Production',
			'Rated',
			'Released',
			'Runtime',
			'Writer',
			'Year',
			'imdbRating',
			'imdbVotes',
		];
		const UNDISPLAYED_VALUES = [NA];

		if (UNDISPLAYED_VALUES.includes(value)) return false;
		if (DISPLAY_KEYS.includes(key)) return true;

		return false;
	};

	return (
		<S.Modal
			isOpen={p.isOpen}
			onClose={p.onClose}
			loading={isLoading}
			loadingComponent={<S.CardLoading descriptionElements={4} />}
		>
			<S.TopSection>
				<S.ImgWrapper>
					<S.Img
						src={
							GS.movieDetails.Poster === NA
								? not_found_img
								: GS.movieDetails.Poster
						}
					/>
				</S.ImgWrapper>
			</S.TopSection>
			<S.BottomSection>
				<S.Title>{GS.movieDetails.Title}</S.Title>
				{Object.entries(GS.movieDetails)
					.filter(([key, value]) =>
						filterEntries(key, value)
					)
					.map(([key, value]) => (
						<div>
							<S.DetailName>
								{capitalizeFirstLetter(key)}:
							</S.DetailName>
							<S.DetailValue>{value}</S.DetailValue>
						</div>
					))}
			</S.BottomSection>
		</S.Modal>
	);
});

export default MovieModal;
