import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface SpinnerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	currentResource: number;
}
