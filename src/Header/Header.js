import { Link } from 'react-router-dom';
import { LOGO_IMG_URL } from '../Utils/constants';
import * as s from './Header.module.scss';

const Header = () => {
	return (
		<div className={s.header}>
			<Link to="/">
				<img src={LOGO_IMG_URL} />
			</Link>
			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About Us</li>
				</Link>
				<Link to="/cart">
					<li>Cart</li>
				</Link>
				<Link to="/profile">
					<li>Profile</li>
				</Link>
				<li>Login</li>
			</ul>
		</div>
	);
};

export default Header;
