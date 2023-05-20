import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import useStore from 'store/store';
import { OMDbApiRequestMovieTypes } from 'types';
import debounce from 'util/debounce';
import * as S from './SearchBar.styled';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const debouncedSearch = debounce((fn: () => void) => {
	fn();
}, 800);

const SearchBar: React.FC = observer(() => {
	const GS = useStore();

	//I would place pagination number to global store if additional component needs to be create in separate component.
	//If pagination component would be in this component, pagination number can be placed here with useState hook.

	React.useEffect(() => {
		if (!GS.searchTitle) return;
		runInAction(() => {
			GS.showFavoriteMovies = false;
			GS.moviesLoading = true;
		});
		debouncedSearch(async () => {
			runInAction(() => {
				GS.moviesLoading = true;
			});
			try {
				// if I would implement pagination, I would pass down the page number into API call here.
				const res = await GS.getMoviesByTextSearch(
					GS.searchTitle,
					GS.searchType
				);
				runInAction(() => {
					if (res.Search) {
						GS.movies = res.Search;
					}
				});
			} catch (e) {
				GS.movies = [];
				console.error('Error while getting movie details', e);
			} finally {
				runInAction(() => {
					GS.moviesLoading = false;
				});
			}
		});
	}, [GS.searchTitle, GS.searchType, GS]);

	// if i would add filters or sorting, I would add them here, by adding a dropdown.
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
			{GS.favoriteMoviesImdbIds.length > 0 && (
				<>
					<S.Button
						onClick={() => {
							runInAction(() => {
								GS.getFavoriteMovies();
							});
						}}
					>
						<S.Icon icon={solidStar} color="#edb117" />
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
