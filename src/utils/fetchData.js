import axios from 'axios';
import { API_KEY } from '../api/api.js';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
	page: 1,
	api_key: API_KEY,
};

export const fetchTrendingMovies = async () => {
	try {
		const response = await axios.get('trending/movie/day', { params });
		return response.data.results;
	} catch (error) {
		console.error('There was an error during downloading fetchMovies: ', error);
		return [];
	}
};
export const fetchCast = async movieId => {
	try {
		const response = await axios.get(`movie/${movieId}/credits`, { params });
		// console.log("Cast: ", movie_id, response.data.cast);
		return response.data.cast;
	} catch (error) {
		console.error('There was an error during downloading fetchCast: ', error);
		return [];
	}
};

export const fetchReviews = async movieId => {
	try {
		const response = await axios.get(`movie/${movieId}/reviews`, { params });
		return response.data.results;
	} catch (error) {
		console.error('There was an error during downloading fetchReviews: ', error);
		return [];
	}
};

export const fetchSearch = async (query = '') => {
	try {
		const updatedParams = { ...params, query };
		const response = await axios.get(`search/movie`, {
			params: updatedParams,
		});
		console.log('Updated params: ', updatedParams);
		console.log('query: ', query);

		console.log('Data, for search: ', query, response.data.results);
		const englishMovies = response.data.results.filter(movie => movie.original_language === 'en');

		console.log('Movies in English: ', englishMovies);
		return englishMovies;
	} catch (error) {
		console.error('There was an error during downloading fetchSearch: ', error);
		return [];
	}
};
