import React from 'react';
import * as S from './SearchBar.styled';
import { getMoviesByTextSearch } from 'services/api';
import useStore from 'store/store';
import { observer } from 'mobx-react-lite';
import Input from 'components/UI/Input/Input';
import { runInAction } from 'mobx';
import Dropdown from 'components/UI/Dropdown/Dropdown';
import { OMDbApiRequestMovieTypes } from 'types';
import debounce from 'util/debounce';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC<{}> = observer(() => {
	const GS = useStore();

	React.useEffect(() => {
		if (!GS.searchTitle) return;

		const debouncedSearch = debounce(async () => {
			const res = await getMoviesByTextSearch(
				GS.searchTitle,
				GS.searchType
			);
			if (res) {
				runInAction(() => {
					GS.setMovies(res);
				});
			}
		}, 500);

		debouncedSearch();
		runInAction(() => {
			GS.moviesLoading = true;
		});
	}, [GS.searchTitle, GS.searchType]);

	return (
		<S.Container>
			<Input
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
			<Dropdown
				options={Object.values(OMDbApiRequestMovieTypes)}
				onSelect={(value) =>
					runInAction(() => {
						GS.searchType =
							value as OMDbApiRequestMovieTypes;
					})
				}
				selected={GS.searchType}
			/>
			<S.Icon
				icon={faXmark}
				color="red"
				onClick={() =>
					runInAction(() => {
						GS.cleanValues();
					})
				}
			/>
		</S.Container>
	);
});

export default SearchBar;
