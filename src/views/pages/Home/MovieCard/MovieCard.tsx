import React from 'react';
import * as S from './MovieCard.styled';
import { observer } from 'mobx-react-lite';
import { MovieCardProps } from './MovieCard.types';
import not_found_img from 'assets/image_not_available.png';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { runInAction } from 'mobx';
import useStore from 'store/store';
import { NA } from 'consts';

const MovieCard: React.FC<MovieCardProps> = observer((p) => {
	const GS = useStore();

	const handleFavoriteClick = (
		e: React.MouseEvent<SVGSVGElement, MouseEvent>,
		imdbId: string
	) => {
		e.stopPropagation();
		runInAction(() => {
			GS.favoriteMovies.includes(imdbId)
				? GS.removeFromFavorites(imdbId)
				: GS.addToFavorites(imdbId);
		});
	};

	return (
		<S.Card onClick={p.onClick}>
			<S.Img src={p.Poster === NA ? not_found_img : p.Poster} />
			<S.Info>
				<S.TitleAndYear>
					<S.Title>{p.Title}</S.Title>
					<S.Year>{p.Year}</S.Year>
				</S.TitleAndYear>
				<S.TypeAndFavorite>
					<S.Type>{p.Type}</S.Type>
					<S.FavoriteStar
						icon={
							GS.favoriteMovies.includes(p.imdbID)
								? solidStar
								: regularStar
						}
						onClick={(e) =>
							handleFavoriteClick(e, p.imdbID)
						}
					/>
				</S.TypeAndFavorite>
			</S.Info>
		</S.Card>
	);
});

export default MovieCard;
