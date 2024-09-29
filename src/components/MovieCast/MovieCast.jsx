import { useMovie } from '../../hooks/useMovie.js';
import { imageBaseURL } from '../../api/api.js';
import css from '../MovieCast/MovieCast.module.css';

export default function MovieCast() {
	const { cast } = useMovie();

	const castWithPhoto = cast.filter(cast => cast.profile_path !== null);

	return (
		<div className={css.cast}>
			{castWithPhoto.length > 0 ? (
				castWithPhoto.slice(0, 20).map(cast => (
					<div className={css.cast_card} key={cast.id}>
						<div className={css.cast_image}>
							<img src={`${imageBaseURL}${cast.profile_path}`} alt={`${cast.name} photo`} />
						</div>
						<h3>{cast.name}</h3>
						<p>as {cast.character}</p>
					</div>
				))
			) : (
				<p>No cast available.</p>
			)}
		</div>
	);
}
