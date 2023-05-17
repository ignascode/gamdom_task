import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import {
	MovieDetails,
	Movie,
	OMDbApiRequestMovieTypes,
	ApiResponse,
} from 'types';
import { makePersistable } from 'mobx-persist-store';

const API_KEY = '5657bf65';
const URL = `http://www.omdbapi.com/?apiKey=${API_KEY}`;

class Store {
	error: string | null | unknown = null;
	searchTitle: string = '';
	searchType: OMDbApiRequestMovieTypes | undefined = undefined;
	movies: Movie[] = [];
	moviesLoading: boolean = false;
	movieDetails: MovieDetails | undefined = undefined;
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

	requestHandler = async (query: URLSearchParams) => {
		try {
			const request = await fetch(URL + '&' + query);
			const result = await request.json();
			if (result.Response === ApiResponse.False) {
				this.error = result.Error;
			}
			return result;
		} catch (error) {
			this.error = error;
		}
	};

	getMoviesByTextSearch = async (
		search: string,
		type?: OMDbApiRequestMovieTypes
	): Promise<void> => {
		const query: URLSearchParams = new URLSearchParams({
			...(search && { s: search }),
			...(type && { type: type }),
		});

		const result = await this.requestHandler(query);
		this.movies = result.Search ? result.Search : [];
	};

	getMovieByImdbId = async (imdbId: string): Promise<void> => {
		const query: URLSearchParams = new URLSearchParams({
			i: imdbId,
		});
		this.movieDetailsLoading = true;
		const result = await this.requestHandler(query);
		this.movieDetails = result ? result : undefined;
		this.movieDetailsLoading = false;
	};

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
