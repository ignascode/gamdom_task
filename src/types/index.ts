export interface Movie {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbId: string;
}

export enum OMDbApiRequestMovieTypes {
	Movie = 'movie',
	Series = 'series',
	Episode = 'episode',
}
