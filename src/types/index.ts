export enum ApiResponse {
	False = 'False',
	True = 'True',
}

export enum OMDbApiRequestMovieTypes {
	Movie = 'movie',
	Series = 'series',
	Episode = 'episode',
}

export enum MovieDetailsValues {
	NA = 'N/A',
}

export interface Movie {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export interface MovieDetails {
	Actors: string;
	Awards: string;
	BoxOffice: string;
	Country: string;
	DVD: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: { Source: string; Value: string }[];
	Released: string;
	Response: string;
	Runtime: string;
	Title: string;
	Type: OMDbApiRequestMovieTypes;
	Website: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}

export interface OMDbApiSearchRequestParams {
	s: string;
	type?: OMDbApiRequestMovieTypes;
	y?: number;
}

export interface OMDbApiGetByIDRequestParams {
	i: string; // valid imdb ID
}

export interface OMDBApiSearch {
	req: OMDbApiSearchRequestParams;
	res: {
		Response: ApiResponse;
		Search?: Movie[];
		Error?: string;
		totalResults?: number;
	};
}

export interface OMDBApiGetByID {
	req: OMDbApiGetByIDRequestParams;
	res: MovieDetails;
}

export type OMDbApiSearchRequestParamsKeys = keyof OMDbApiSearchRequestParams;
