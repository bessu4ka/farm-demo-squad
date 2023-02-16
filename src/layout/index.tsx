import { Outlet } from 'react-router-dom';

import { Footer, Header } from 'components';

import styled from './styled.module.scss';

export const Layout = () => {
	return (
		<div className={styled.container}>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
