import { useEffect } from 'react';

import { RouletteTimerProps } from './index.props';

import styled from './styled.module.scss';

export const RouletteTimer = ({ setTimer, timer }: RouletteTimerProps): JSX.Element => {
	useEffect(() => {
		const timerInterval = setInterval(() => {
			setTimer((prev) => prev - 1);
			if (timer <= 0) {
				clearInterval(timerInterval);
			}
		}, 1000);
		return () => {
			clearInterval(timerInterval);
		};
	}, [setTimer, timer]);

	return <section className={styled.container}>{timer}</section>;
};
