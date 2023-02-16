import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import { Layout } from 'layout';
import { Home, Empty, Login } from './pages';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path={ROUTES.home} element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="some_route_1" element={<JSXElement_1 />} /> */}
					<Route path={ROUTES.login} element={<Login />} />
					<Route path={ROUTES.empty} element={<Empty />} />
				</Route>
			</Routes>
		</>
	);
};
