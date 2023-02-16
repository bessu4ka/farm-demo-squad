import { useEffect } from 'react';

import { RouletteTimerProps } from './index.props';
import { getCorrectTime } from 'utils';

import styled from './styled.module.scss';

export const RouletteTimer = ({
	setTimer,
	timer,
	isDisable,
}: RouletteTimerProps): JSX.Element => {
	useEffect(() => {
		const timerInterval = setInterval(() => {
			if (timer) {
				setTimer((prev) => prev - 1);
			}
			if (timer <= 0) {
				clearInterval(timerInterval);
			}
		}, 1000);
		return () => {
			clearInterval(timerInterval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timer]);

	return (
		<section className={styled.container}>
			{isDisable ? (
				<div>
					<span>{getCorrectTime(timer).hours}</span>:
					<span>{getCorrectTime(timer).minutes}</span>:
					<span>{getCorrectTime(timer).seconds}</span>
				</div>
			) : (
				'you can spin'
			)}
		</section>
	);
};
