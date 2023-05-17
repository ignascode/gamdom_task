import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { Movie, OMDbApiRequestMovieTypes } from 'types';
import { makePersistable } from 'mobx-persist-store';

class Store {
	searchTitle: string = '';
	searchType: OMDbApiRequestMovieTypes | undefined = undefined;
	movies: Movie[] = [];
	moviesLoading: boolean = false;
	movieDetailsLoading: boolean = false;
	favoriteMovies: string[] = [];

	constructor() {
		makePersistable(this, {
			name: 'favoriteMovies',
			properties: ['favoriteMovies'],
			storage: window.localStorage,
		});

		makeAutoObservable(this, {
			movies: observable,
		});
	}

	setMovies(movies: Movie[]) {
		this.movies = movies;
		this.moviesLoading = false;
	}

	addToFavorites(imdbId: string) {
		this.favoriteMovies.push(imdbId);
	}

	removeFromFavorites(imdbId: string) {
		this.favoriteMovies = this.favoriteMovies.filter(
			(id) => id !== imdbId
		);
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
