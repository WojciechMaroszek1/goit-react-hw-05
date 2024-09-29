import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { useMovie } from '../../hooks/useMovie';

const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
	const { setFilterQuery, setListFiltred } = useMovie();

	const handleClear = () => {
		setListFiltred([]);
		setFilterQuery('');
	};
	return (
		<nav className={css.navigation}>
			<NavLink to="/" className={buildLinkClass}>
				Home
			</NavLink>
			<NavLink to="/movies" className={buildLinkClass} onClick={handleClear}>
				Movies
			</NavLink>
		</nav>
	);
};

export default Navigation;
