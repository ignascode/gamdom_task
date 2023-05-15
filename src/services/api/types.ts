import { Movie } from 'types';

export enum ApiResponse {
	False = 'False',
	True = 'True',
}

export enum OMDbApiRequestParams {
	s = 's',
	type = 'type',
	y = 'y',
}

export interface RequestHandlerResponse {
	Response: ApiResponse;
	Search?: Movie[];
	Error?: string;
	totalResults?: number;
}

// export interface OMDbApiRequestParams {
// 	s: string;
// 	type?: 'movie' | 'series' | 'episode';
// 	y?: number;
// }
