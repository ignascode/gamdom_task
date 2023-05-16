import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { Movie, OMDbApiRequestMovieTypes } from 'types';

class Store {
	searchTitle: string = '';
	searchType: OMDbApiRequestMovieTypes | undefined = undefined;
	movies: Movie[] = [];
	moviesLoading: boolean = false;
	movieDetailsLoading: boolean = false;

	constructor() {
		makeAutoObservable(this, {
			movies: observable,
		});
	}

	setMovies(movies: Movie[]) {
		this.movies = movies;
		this.moviesLoading = false;
	}

	cleanValues() {
		this.searchTitle = '';
		this.searchType = undefined;
		this.movies = [];
	}
}

const storeContext = React.createContext<Store>(new Store());
export default function useStore(): Store {
	const store = React.useContext(storeContext);
	return store;
}
