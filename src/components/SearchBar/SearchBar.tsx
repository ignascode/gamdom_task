import React from 'react';
import * as S from './SearchBar.styled';
import { searchMovie } from 'services/api';
import useStore from 'store/store';
import { observer } from 'mobx-react-lite';
import Input from 'components/UI/Input/Input';
import { runInAction } from 'mobx';
// import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<{}> = observer(() => {
	const GS = useStore();

	React.useEffect(() => {
		if (!GS.searchTitle) return;

		const search = async () => {
			const res = await searchMovie(GS.searchTitle);
			console.log('resz', res);
			if (res) {
				runInAction(() => {
					GS.setMovies(res);
				});
			}
			// console.log('res', res)
		};

		search();

		// searchMovie(GS.searchTitle);
	}, [GS.searchTitle]);

	return (
		<S.Container>
			<Input
				// lable="Title"
				placeholder="Enter movie title"
				onChange={(e) =>
					runInAction(() => {
						GS.searchTitle = e.target.value;
					})
				}
			/>
		</S.Container>
	);
});

export default SearchBar;
