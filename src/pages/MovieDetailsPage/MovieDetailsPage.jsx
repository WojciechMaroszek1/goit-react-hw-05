import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie.js';
import { useParams } from 'react-router-dom';
import { imageBaseURL } from '../../api/api.js';
import { genreMap } from '../../utils/constantData.js';
import css from '../MovieDetailsPage/MovieDetailsPage.module.css';
import NavigationBack from '../../components/Navigation/NavigationBack.jsx';

export default function MovieDetailsPage() {
	const { moviesList = [], listFiltred = [], setMovieId } = useMovie();
	const { movieId } = useParams();
	console.log('movieId from URL:', movieId);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		if (movieId) {
			setMovieId(movieId);
		}
	}, [movieId, setMovieId]);

	useEffect(() => {
		if (listFiltred.length !== 0) {
			const foundMovieFiltred = listFiltred.find(movie => movie.id === parseInt(movieId));
			setMovie(foundMovieFiltred);
		} else {
			const foundMovie = moviesList.find(movie => movie.id === parseInt(movieId));
			setMovie(foundMovie);
		}
	}, [moviesList, listFiltred, movieId]);

	console.log('z MDP listFiltred:', listFiltred);

	if (!movie) {
		return <h2>Sorry. Movie not found 400!</h2>;
	}

	if (!movieId) {
		return <h2>Sorry. Movie ID not found 500!</h2>;
	}

	return (
		<>
			<div className={css.movie_page_container}>
				<NavigationBack />
				<div className={css.movie_details_box}>
					<div className={css.movie_image}>
						<img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
					</div>
					<div className={css.movie_descr}>
						<h2>{movie.title}</h2>
						<br />
						<p>
							<span className={css.strong}>Release Date: </span>
							{movie.release_date}
						</p>
						<p>
							<span className={css.strong}>Average Vote: </span> {movie.vote_average}
						</p>
						<p>
							<span className={css.strong}>Genres: </span>
							{movie.genre_ids.map(id => genreMap[id]).join(', ')}
						</p>
						<br />
						<p>
							<span className={css.strong}>Overview: </span>
							{movie.overview}
						</p>
						<br />
						<p>
							<span className={css.strong}>Additional information:</span>
						</p>
						<div className={css.add_descr}>
							<NavLink
								className={css.btn}
								to={`/movies/${movieId}/cast`}
								state={{ from: location.pathname }}
							>
								Cast
							</NavLink>
							<NavLink
								className={css.btn}
								to={`/movies/${movieId}/reviews`}
								state={{ from: location.pathname }}
							>
								Reviews
							</NavLink>
						</div>
						<br />
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
}
