import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import useStore from 'store/store';
import { OMDbApiRequestMovieTypes } from 'types';
import debounce from 'util/debounce';
import * as S from './SearchBar.styled';

import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC<{}> = observer(() => {
	const GS = useStore();

	React.useEffect(() => {
		if (!GS.searchTitle) return;

		runInAction(() => {
			GS.moviesLoading = true;
		});

		const debouncedSearch = debounce(async () => {
			await GS.getMoviesByTextSearch(GS.searchTitle, GS.searchType);
		}, 800);

		debouncedSearch();
	}, [GS.searchTitle, GS.searchType]);

	return (
		<S.Container>
			<S.Input
				placeholder="Enter movie name that you are looking..."
				icon={faMagnifyingGlass}
				onChange={(e) =>
					runInAction(() => {
						GS.searchTitle = e.target.value;
						GS.searchType = undefined;
					})
				}
				value={GS.searchTitle}
			/>
			<S.Dropdown
				options={Object.values(OMDbApiRequestMovieTypes)}
				onSelect={(value) =>
					runInAction(() => {
						GS.searchType =
							value as OMDbApiRequestMovieTypes;
					})
				}
				selected={GS.searchType}
			/>
			{GS.favoriteMovies.length > 0 && (
				<>
					<S.Button
						onClick={() => {
							runInAction(() => {
								GS.getFavoriteMovies();
							});
						}}
					>
						<S.Icon
							icon={solidStar}
							color="#edb117"
							onClick={() =>
								runInAction(() => {
									GS.cleanValues();
								})
							}
						/>
						Get my favorite movies
					</S.Button>
					<S.Button
						onClick={() => {
							runInAction(() => {
								GS.removeAllFavorites();
							});
						}}
					>
						<S.Icon icon={faXmark} color="red" />
						Remove all from favorites
					</S.Button>
				</>
			)}
			<S.Button
				onClick={() =>
					runInAction(() => {
						GS.cleanValues();
					})
				}
			>
				<S.Icon icon={faXmark} color="red" />
				Reset search
			</S.Button>
		</S.Container>
	);
});

export default SearchBar;
