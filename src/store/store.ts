import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import {
	MovieDetails,
	Movie,
	OMDbApiRequestMovieTypes,
	ApiResponse,
} from 'types';
import { makePersistable } from 'mobx-persist-store';
import { URL } from 'consts';

class Store {
	error: string | null | unknown = null;
	searchTitle: string = '';
	searchType?: OMDbApiRequestMovieTypes = undefined;
	movies: Movie[] = [];
	moviesLoading: boolean = false;
	movieDetails?: MovieDetails = undefined;
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

	private async requestHandler(query: URLSearchParams) {
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
	}

	public async getMoviesByTextSearch(
		search: string,
		type?: OMDbApiRequestMovieTypes
	): Promise<void> {
		const query: URLSearchParams = new URLSearchParams({
			...(search && { s: search }),
			...(type && { type: type }),
		});

		const result = await this.requestHandler(query);
		this.movies = result.Search ? result.Search : [];
	}

	public async getMovieByImdbId(imdbId: string): Promise<void> {
		const query: URLSearchParams = new URLSearchParams({
			i: imdbId,
		});
		this.movieDetailsLoading = true;
		const result = await this.requestHandler(query);
		this.movieDetails = result ? result : undefined;
		this.movieDetailsLoading = false;
	}

	public addToFavorites(imdbId: string) {
		this.favoriteMovies.push(imdbId);
	}

	public removeFromFavorites(imdbId: string) {
		this.favoriteMovies = this.favoriteMovies.filter(
			(id) => id !== imdbId
		);
	}

	public cleanValues() {
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
