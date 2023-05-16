import React from 'react';
import * as S from './SearchBar.styled';
import { getMoviesByTextSearch } from 'services/api';
import useStore from 'store/store';
import { observer } from 'mobx-react-lite';
import Input from 'components/UI/Input/Input';
import { runInAction } from 'mobx';
import Dropdown from 'components/UI/Dropdown/Dropdown';
import { OMDbApiRequestMovieTypes } from 'types';
// import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<{}> = observer(() => {
	const GS = useStore();

	React.useEffect(() => {
		if (!GS.searchTitle) return;

		const search = async () => {
			const res = await getMoviesByTextSearch(
				GS.searchTitle,
				GS.searchType
			);
			if (res) {
				runInAction(() => {
					GS.setMovies(res);
				});
			}
		};

		search();
	}, [GS.searchTitle, GS.searchType]);

	return (
		<S.Container>
			<Input
				placeholder="Enter movie title"
				onChange={(e) =>
					runInAction(() => {
						GS.searchTitle = e.target.value;
					})
				}
			/>
			<Dropdown
				options={Object.values(OMDbApiRequestMovieTypes)}
				onSelect={(value) =>
					runInAction(() => {
						GS.searchType =
							value as OMDbApiRequestMovieTypes;
					})
				}
			/>
		</S.Container>
	);
});

export default SearchBar;
