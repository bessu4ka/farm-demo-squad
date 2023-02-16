import { Routes, Route } from 'react-router-dom';

import { Layout } from 'layout';
import { Home } from 'pages/Home';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="some_route_1" element={<JSXElement_1 />} /> */}
					{/* <Route path="some_route_2" element={<JSXElement_1 />} /> */}
					{/* <Route path="some_route_3" element={<JSXElement_1 />} /> */}
				</Route>
			</Routes>
		</>
	);
};
