import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RouletteTimerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	setTimer: React.Dispatch<React.SetStateAction<number>>;
	timer: number;
	isDisable: boolean;
}
