import React from 'react';

import { observer } from 'mobx-react-lite';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import MoviesCards from './MoviesCards/MoviesCards';

const Home: React.FC = observer(() => {
	return (
		<>
			<Header
				title="Rotten Pomidors"
				subtitle="Find your awesome movie"
			/>
			<SearchBar />
			<MoviesCards />
		</>
	);
});

export default Home;