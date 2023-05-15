import { Movie } from 'types';
import {
	ApiResponse,
	OMDbApiRequestParams,
	RequestHandlerResponse,
} from './types';

const API_KEY = '5657bf65';
const URL = `http://www.omdbapi.com/?apiKey=${API_KEY}`;
const URL_POSTER = `http://img.omdbapi.com/?apiKey=${API_KEY}`;

const handleApiError = (error: string) => {
	console.log('apiError', error);
};

const handleRequestError = (error: unknown) => {
	console.log('requestError', error);
};

const requestHandler = async (
	param: Partial<Record<OMDbApiRequestParams, string>>
) => {
	const query = Object.values(param).every((value) => value)
		? `&${new URLSearchParams(param)}`
		: '';

	try {
		const request = await fetch(URL + query);
		const result = await request.json();
		if (result.Response === ApiResponse.False) {
			handleApiError(result.Error);
		}
		return result;
	} catch (error) {
		handleRequestError(error);
	}
};

export const searchMovie = async (search: string): Promise<Movie[]> => {
	const result = await requestHandler({ s: search });
	return result.Search ? result.Search : [];
};
