import { NavLink, useLocation } from 'react-router-dom';
import css from '../Navigation/NavigationBack.module.css';

export default function NavigationBack() {
	const location = useLocation();
	console.log(location);

	const backLink = location.state?.from?.pathname + location.state?.from?.search || '/';
	console.log(backLink);

	return (
		<NavLink to={backLink} className={css.back_btn}>
			Go back
		</NavLink>
	);
}
