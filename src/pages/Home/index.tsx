import { Roulette } from 'components';

import styled from './styled.module.scss';

export const Home = () => {
	return (
		<section className={styled.container}>
			<Roulette />
		</section>
	);
};
