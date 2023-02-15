import { useState } from 'react';

import { Button, Spinner } from 'components';
import { spinRoulette } from 'utils';

import styled from './styled.module.scss';

export const Home = () => {
	const [currentResource, setCurrentResource] = useState<number>(1);

	return (
		<section className={styled.container}>
			<Spinner currentResource={currentResource} />
			<Button children="spin" handlerClick={() => spinRoulette(setCurrentResource)} />
		</section>
	);
};
