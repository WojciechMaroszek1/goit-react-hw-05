import { useEffect, useState } from 'react';
import { useMovie } from '../../hooks/useMovie';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { imageBaseURL } from '../../api/api.js';
import Loader from '../../components/Loader/Loader.jsx';
import css from '../MoviesPage/MoviesPage.module.css';

export default function MoviesPage() {
	const [query, setQuery] = useState('');
	const [searchMade, setSearchMade] = useState(false);
	const [loading, setLoading] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();

	const { listFiltred, setFilterQuery, setListFiltred } = useMovie();

	const sortedMovies = listFiltred.toSorted((a, b) => new Date(b.release_date) - new Date(a.release_date));

	const handlesubmit = e => {
		e.preventDefault();
		setLoading(true);
		setFilterQuery(query);
		console.log(query);
		setSearchMade(true);
		navigate(`/movies?query=${encodeURIComponent(query)}`, {
			state: { from: location },
		});
	};

	const handleClear = () => {
		setQuery('');
		setSearchMade(false);
		setListFiltred([]);
		setFilterQuery('');
		navigate('/movies');
	};

	useEffect(() => {
		if (listFiltred.length > 0 || searchMade) {
			setLoading(false);
		}
	}, [listFiltred, searchMade]);

	return (
		<>
			<div className={css.form_search}>
				<form onSubmit={handlesubmit}>
					<input
						className={css.input}
						type="text"
						name="query"
						value={query}
						onChange={e => setQuery(e.target.value)}
						placeholder="Search for a movie..."
					></input>
					<button type="submit" className={css.btn}>
						Search
					</button>
					<button type="button" className={css.btn} onClick={handleClear}>
						Clear
					</button>
				</form>
			</div>
			<div>
				{loading ? (
					<Loader />
				) : searchMade && sortedMovies.length === 0 ? (
					<h4>Sorry. No movies found to your query!</h4>
				) : (
					<ul className={css.movie_container}>
						{sortedMovies.map(movie => (
							<li key={movie.id} id={movie.id} className={css.movie_box}>
								<NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
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
				)}
			</div>
		</>
	);
}
