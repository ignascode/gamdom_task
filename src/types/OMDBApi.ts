import { Movie, MovieDetails, OMDbApiRequestMovieTypes } from 'types';

export enum ApiResponse {
	False = 'False',
	True = 'True',
}

export interface OMDbApiSearchRequestParams {
	s: string;
	type?: OMDbApiRequestMovieTypes;
	y?: number;
}

export interface OMDbApiGetByIDRequestParams {
	i: string; // valid imdb ID
}

export interface OMDBApi {
	OMDBApiSearch: {
		req: OMDbApiSearchRequestParams;
		res: {
			Response: ApiResponse;
			Search?: Movie[];
			Error?: string;
			totalResults?: number;
		};
	};
	OMDBApiGetByID: {
		req: OMDbApiGetByIDRequestParams;
		res: MovieDetails;
	};
}

export type OMDbApiSearchRequestParamsKeys = keyof OMDbApiSearchRequestParams;
