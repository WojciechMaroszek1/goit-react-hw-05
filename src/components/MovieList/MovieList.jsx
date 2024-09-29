import { useMovie } from '../../hooks/useMovie';
import css from './MovieList.module.css';
import { NavLink } from 'react-router-dom';
import { imageBaseURL } from '../../api/api';

const MovieList = () => {
	const { moviesList } = useMovie();
	return (
		<div>
			<ul className={css.movie_container}>
				{moviesList.map(movie => (
					<li key={movie.id} id={movie.id} className={css.movie_box}>
						<NavLink to={`/movies/${movie.id}`}>
							{movie.title}
							<img
								className={css.img_small}
								src={`${imageBaseURL}${movie.poster_path}`}
								alt={movie.title}
							/>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MovieList;
