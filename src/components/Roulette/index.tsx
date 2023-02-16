import { useState } from 'react';

import { Spinner } from '../Spinner';
import { Button } from '../Button';
import { RouletteTimer } from '../RouletteTimer';
import { getTotalNumberOfSeconds, spinRoulette } from 'utils';
import { useButtonDisable } from 'hooks';

import styled from './styled.module.scss';

const timeFromBack = 1676579612162;

export const Roulette = (): JSX.Element => {
	const [timer, setTimer] = useState<number>(() => getTotalNumberOfSeconds(timeFromBack));
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
			<RouletteTimer setTimer={setTimer} timer={timer} isDisable={isDisable} />
		</section>
	);
};
