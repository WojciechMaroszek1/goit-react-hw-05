import css from './App.module.css';

import HomePage from '../pages/HomePage/HomePage.jsx';
import MoviePage from '../pages/MoviesPage/MoviesPage.jsx';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import Navigation from './Navigation/Navigation.jsx';

import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			{' '}
			<div className={css.navigation_background}>
				<div className={css.webstyle}>
					<Navigation>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/movie" element={<MoviePage />} />
							<Route path="/movie-details" element={<MovieDetailsPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Navigation>
				</div>
			</div>
		</>
	);
}

export default App;
