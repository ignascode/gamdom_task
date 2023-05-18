import React from 'react';
import { makeAutoObservable } from 'mobx';
import { MovieDetails, Movie } from 'types';
import { ApiResponse, OMDBApiGetByID, OMDBApiSearch } from 'types/OMDBApi';
import { OMDbApiRequestMovieTypes } from 'types';
import { makePersistable } from 'mobx-persist-store';
import { URL } from 'consts';
import { toast } from 'react-toastify';

class Store {
	public searchTitle: string = '';
	public searchType?: OMDbApiRequestMovieTypes;
	public movies: Movie[] | MovieDetails[] = [];
	public moviesLoading: boolean = false;
	public movieDetails?: MovieDetails;
	public movieDetailsLoading: boolean = false;
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
				toast(result.Error);
			}
			return result;
		} catch (error) {
			toast(String(error));
		}
		throw new Error('Unexpected code execution');
	}

	public async getMoviesByTextSearch(
		search: string,
		type?: OMDbApiRequestMovieTypes
	): Promise<void> {
		const query: URLSearchParams = new URLSearchParams({
			s: search,
			...(type && { type: type }),
		});

		const result = await this.requestHandler<OMDBApiSearch['res']>(
			query
		);
		this.movies = result && result.Search ? result.Search : [];
		this.moviesLoading = false;
	}

	public async getMovieByImdbId(imdbId: string): Promise<MovieDetails> {
		const query = new URLSearchParams({
			i: imdbId,
		});
		this.movieDetailsLoading = true;
		const result = await this.requestHandler<OMDBApiGetByID['res']>(
			query
		);
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
		this.movies = result ? result : [];
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
