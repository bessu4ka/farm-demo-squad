import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TextErrorProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
}
