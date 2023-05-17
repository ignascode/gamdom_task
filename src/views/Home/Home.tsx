import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from './Header/Header';
import SearchBar from 'views/Home/SearchBar/SearchBar';
import MoviesCards from './MoviesCards/MoviesCards';

const Home: React.FC = observer(() => {
	return (
		<>
			<Header
				title="Rotten Pomidors"
				subtitle="Find the movie for today"
			/>
			<SearchBar />
			<MoviesCards />
		</>
	);
});

export default Home;
