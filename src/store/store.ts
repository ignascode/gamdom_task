import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { Movie } from 'types';

class Store {
	searchTitle = '';
	movies: Movie[] = [];

	constructor() {
		makeAutoObservable(this, {
			movies: observable,
		});
	}

	setMovies(movies: Movie[]) {
		this.movies = movies;
	}
}

const storeContext = React.createContext<Store>(new Store());
export default function useStore(): Store {
	const store = React.useContext(storeContext);
	return store;
}
