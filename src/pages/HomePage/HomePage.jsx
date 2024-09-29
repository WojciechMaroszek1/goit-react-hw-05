import css from '../HomePage/HomePage.module.css';
import { useMovie } from '../../hooks/useMovie';
import Loader from '../../components/Loader/Loader';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

const HomePage = () => {
	const { moviesList, setFilterQuery } = useMovie();

	useEffect(() => {
		setFilterQuery('');
	}, [setFilterQuery]);

	return (
		<div>
			<Suspense fallback={<Loader />}>
				<h1 className={css.home_style}>Trending movies today</h1>
				<MovieList movieList={moviesList} />
			</Suspense>
		</div>
	);
};

export default HomePage;
