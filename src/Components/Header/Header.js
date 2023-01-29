import { Link } from 'react-router-dom';
import LOGO_IMG_URL from '../../assets/img/logo.png';
import * as s from './Header.module.scss';

const Header = () => {
	return (
		<div className={s.header}>
			<div className={s.headerContanier}>
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
					<Link to="/login">
						<li>Login</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;
