import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants';
import { Layout } from 'layout';
import { Home, Empty } from './pages';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path={ROUTES.home} element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="some_route_1" element={<JSXElement_1 />} /> */}
					{/* <Route path="some_route_2" element={<JSXElement_1 />} /> */}
					<Route path={ROUTES.empty} element={<Empty />} />
				</Route>
			</Routes>
		</>
	);
};
