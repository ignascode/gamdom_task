import React from 'react';
import { observer } from 'mobx-react-lite';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import MoviesCards from './MoviesCards/MoviesCards';
import { ToastContainer } from 'react-toastify';

const Home: React.FC = observer(() => {
	return (
		<>
			<Header
				title="Rotten Pomidors"
				subtitle="Find the movie for today"
			/>
			<SearchBar />
			<MoviesCards />
			<ToastContainer />
		</>
	);
});

export default Home;
