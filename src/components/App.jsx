import css from './App.module.css';
import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage.jsx';
import MoviesPage from '../pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from './Navigation/Navigation.jsx';
import MovieCast from './MovieCast/MovieCast.jsx';
import MovieReviews from './MovieReviews/MovieReviews.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			{' '}
			<Suspense>
				<div className={css.navigation_background}>
					<Navigation />
				</div>
				<Routes className={css.page_style}>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:movieId" element={<MovieDetailsPage />}>
						<Route path="cast" element={<MovieCast />} />
						<Route path="reviews" element={<MovieReviews />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
