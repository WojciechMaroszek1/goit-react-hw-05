import { useContext } from 'react';
import MovieContex from '../contexts/MovieContext';

export const useMovie = () => {
	const contex = useContext(MovieContex);
	return contex;
};
