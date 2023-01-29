import { NavLink } from 'react-router-dom';
import LOGO_IMG_URL from '../../assets/img/logo.png';
import * as s from './Header.module.scss';

const Header = () => {
	let activeStyle = {
		paddingBottom: '5px',
		borderBottom: '1px solid green',
	};
	return (
		<div className={s.header}>
			<div className={s.headerContanier}>
				<NavLink to="/">
					<img src={LOGO_IMG_URL} />
				</NavLink>
				<ul>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/cart"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Cart
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/profile"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/login"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
