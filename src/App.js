import { createBrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import Menu from './Components/Menu/Menu';
// import {fetching} from './hooks/useRestaurantList'
import '../index.css';

const App = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
};

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
				// loader: () => fetching(),
				// errorElement: <>error</>,
			},
			{
				path: 'about',
				element: <AboutUs />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
			{
				path: 'restaurant/:id',
				element: <Menu />,
			},
		],
	},
]);

export default App;
