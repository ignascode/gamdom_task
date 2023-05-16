import { Movie, OMDbApiRequestMovieTypes } from 'types';

export enum ApiResponse {
	False = 'False',
	True = 'True',
}

export interface RequestHandlerResponse {
	Response: ApiResponse;
	Search?: Movie[];
	Error?: string;
	totalResults?: number;
}

export interface OMDbApiRequestParamsInt {
	s: string;
	type?: OMDbApiRequestMovieTypes;
	y?: number;
}

export type OMDbApiRequestParamsKeys = keyof OMDbApiRequestParamsInt;
