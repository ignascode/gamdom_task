import React from 'react';
import { makeAutoObservable } from 'mobx';
import { MovieDetails, Movie } from 'types';
import { ApiResponse, OMDBApi } from 'types/OMDBApi';
import { OMDbApiRequestMovieTypes } from 'types';
import { makePersistable } from 'mobx-persist-store';
import { URL } from 'consts';
import { toast } from 'react-toastify';

class Store {
	public searchTitle = '';
	public searchType?: OMDbApiRequestMovieTypes;
	public movies: Movie[] | MovieDetails[] = [];
	public moviesLoading = false;
	public movieDetails?: MovieDetails;
	public favoriteMovies: string[] = [];

	constructor() {
		makePersistable(this, {
			name: 'favoriteMovies',
			properties: ['favoriteMovies'],
			storage: window.localStorage,
		});

		makeAutoObservable(this);
	}

	private async requestHandler<T>(query: URLSearchParams): Promise<T> {
		try {
			const request = await fetch(URL + '&' + query);
			const result = await request.json();
			if (result.Response === ApiResponse.False) {
				throw new Error(result.Error);
			}
			if (!result) {
				throw new Error('No results');
			}
			return result;
		} catch (error) {
			if (error instanceof Error) {
				toast(String(error.message));
			} else {
				toast(String(error));
			}
			throw error;
		}
	}

	public async getMoviesByTextSearch(
		search: string,
		type?: OMDbApiRequestMovieTypes
	): Promise<OMDBApi['OMDBApiSearch']['res']> {
		const query: URLSearchParams = new URLSearchParams({
			s: search,
			...(type && { type: type }),
		});

		return this.requestHandler<OMDBApi['OMDBApiSearch']['res']>(query);
	}

	public async getMovieDetailsByImdbId(
		imdbId: string
	): Promise<MovieDetails> {
		const query = new URLSearchParams({
			i: imdbId,
		});
		return this.requestHandler<OMDBApi['OMDBApiGetByID']['res']>(query);
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
			this.getMovieDetailsByImdbId(imdbId)
		);
		const result = await Promise.all(promiseArr);
		this.movies = result;
	}

	public removeAllFavorites(): void {
		this.favoriteMovies = [];
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
