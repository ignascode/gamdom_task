import { Movie } from 'types';

export interface MovieCardProps extends Movie {
	onClick: () => void;
}
