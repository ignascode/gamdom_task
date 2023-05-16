import { Movie, OMDbApiRequestMovieTypes } from 'types';
import * as Type from './types';

const API_KEY = '5657bf65';
const URL = `http://www.omdbapi.com/?apiKey=${API_KEY}`;
const URL_POSTER = `http://img.omdbapi.com/?apiKey=${API_KEY}`;

const handleApiError = (error: string) => {
	console.log('apiError', error);
};

const handleRequestError = (error: unknown) => {
	console.log('requestError', error);
};

const requestHandler = async (query: URLSearchParams) => {
	try {
		const request = await fetch(URL + '&' + query);
		const result = await request.json();
		if (result.Response === Type.ApiResponse.False) {
			handleApiError(result.Error);
		}
		return result;
	} catch (error) {
		handleRequestError(error);
	}
};

export const searchMovie = async (
	search: string,
	type?: OMDbApiRequestMovieTypes
): Promise<Movie[]> => {
	const query: URLSearchParams = new URLSearchParams({
		...(search && { s: search }),
		...(type && { type: type }),
	});

	const result = await requestHandler(query);
	return result.Search ? result.Search : [];
};
