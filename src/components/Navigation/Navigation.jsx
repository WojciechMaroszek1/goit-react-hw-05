import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
	return (
		<nav className={css.navigation}>
			<NavLink to="/" className={buildLinkClass}>
				Home
			</NavLink>
			<NavLink to="/movie" className={buildLinkClass}>
				Movies
			</NavLink>
			<NavLink to="/movie-details" className={buildLinkClass}>
				Movie Details
			</NavLink>
		</nav>
	);
};

export default Navigation;
