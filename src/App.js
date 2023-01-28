import { createBrowserRouter } from 'react-router-dom';

import Header from './Header/Header';
import Body from './Body/Body';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Cart from './Cart/Cart';
import Profile from './Profile/Profile';
import Menu from './Menu/Menu';

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
