import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	lable?: string;
	icon?: IconProp;
}
