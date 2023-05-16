import { Movie } from 'types';

export interface CardProps extends Movie {
	onClick: () => void;
}
