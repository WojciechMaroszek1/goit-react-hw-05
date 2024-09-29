import MovieContext from '../contexts/MovieContext';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies, fetchSearch, fetchReviews, fetchCast } from '../utils/fetchData';

export default function MovieProvider({ children }) {
	const [moviesList, setMoviesList] = useState([]);
	const [movieId, setMovieId] = useState(null);
	const [cast, setCast] = useState([]);
	const [listFiltred, setListFiltred] = useState([]);
	const [filterQuery, setFilterQuery] = useState('');
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const trendingMovies = await fetchTrendingMovies();
				setMoviesList(trendingMovies);
			} catch (error) {
				console.log('There was an error during downloading Movies: ', error);
			}
		};
		getMovies();
	}, []);

	useEffect(() => {
		if (filterQuery) {
			const getData = async () => {
				try {
					const moviesFiltred = await fetchSearch(filterQuery);
					setListFiltred(moviesFiltred);
				} catch (error) {
					console.error('There was an error during downloading Search:', error);
				}
			};
			getData();
		} else {
			setListFiltred([]);
		}
	}, [filterQuery]);

	useEffect(() => {
		if (movieId) {
			const getDataCast = async () => {
				try {
					const moviesCast = await fetchCast(movieId);
					setCast(moviesCast);
				} catch (error) {
					console.error('There was an error during downloading Cast:', error);
				}
			};
			getDataCast();
		}
	}, [movieId]);
	useEffect(() => {
		if (movieId) {
			const getDataReviews = async () => {
				try {
					const moviesReviews = await fetchReviews(movieId);
					setReviews(moviesReviews);
				} catch (error) {
					console.error('There was an error during downloading Reviews:', error);
				}
			};
			getDataReviews();
		}
	}, [movieId]);

	return (
		<MovieContext.Provider
			value={{ moviesList, listFiltred, cast, reviews, setMovieId, setFilterQuery, setListFiltred }}
		>
			{children}
		</MovieContext.Provider>
	);
}
MovieProvider.propTypes = {
	children: PropTypes.any,
};
