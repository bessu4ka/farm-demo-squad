import { useState } from 'react';

import { Spinner } from '../Spinner';
import { Button } from '../Button';
import { RouletteTimer } from '../RouletteTimer';
import { spinRoulette } from 'utils';
import { useButtonDisable } from 'hooks';

import styled from './styled.module.scss';

const timeToSpin = 5;

export const Roulette = (): JSX.Element => {
	const [timer, setTimer] = useState<number>(timeToSpin);
	const [currentResource, setCurrentResource] = useState<number>(1);
	const isDisable = useButtonDisable(timer);

	return (
		<section className={styled.container}>
			<Spinner currentResource={currentResource} />
			<Button
				disabled={isDisable}
				children="spin"
				handlerClick={() => spinRoulette(setCurrentResource)}
			/>
			<RouletteTimer setTimer={setTimer} timer={timer} />
		</section>
	);
};
