export interface Movie {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export enum OMDbApiRequestMovieTypes {
	Movie = 'movie',
	Series = 'series',
	Episode = 'episode',
}

export interface DetailedMovie {
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
