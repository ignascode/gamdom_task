import React from 'react';
import { makeAutoObservable, observable } from 'mobx';
import { MovieDetails, Movie, ErrorState } from 'types';
import { ApiResponse } from 'types/OMDBApi';
import { OMDbApiRequestMovieTypes } from 'types';
import { makePersistable } from 'mobx-persist-store';
import { URL } from 'consts';

class Store {
	error: ErrorState = {
		apiError: undefined,
		requestError: undefined,
	};
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
			this.error.apiError = undefined;
			this.error.requestError = undefined;
			const request = await fetch(URL + '&' + query);
			const result = await request.json();
			if (result.Response === ApiResponse.False) {
				this.error.apiError = result.Error;
			}
			return result;
		} catch (error) {
			this.error.requestError = String(error);
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

	public async getMovieByImdbId(imdbId: string): Promise<MovieDetails> {
		const query: URLSearchParams = new URLSearchParams({
			i: imdbId,
		});
		this.movieDetailsLoading = true;
		const result = await this.requestHandler(query);
		this.movieDetails = result ? result : undefined;
		this.movieDetailsLoading = false;
		return result;
	}

	public addToFavorites(imdbId: string) {
		this.favoriteMovies.push(imdbId);
	}

	public removeFromFavorites(imdbId: string) {
		this.favoriteMovies = this.favoriteMovies.filter(
			(id) => id !== imdbId
		);
	}

	public async getFavoriteMovies(): Promise<void> {
		const promiseArr = this.favoriteMovies.map((imdbId) =>
			this.getMovieByImdbId(imdbId)
		);
		const result = await Promise.all(promiseArr);
		this.movies = result;
	}

	public async removeAllFavorites(): Promise<void> {
		this.favoriteMovies = [];
	}

	public cleanValues() {
		this.searchTitle = '';
		this.searchType = undefined;
		this.movies = [];
		this.error = {
			apiError: undefined,
			requestError: undefined,
		};
	}
}

const storeContext = React.createContext<Store>(new Store());
export default function useStore(): Store {
	const store = React.useContext(storeContext);
	return store;
}
