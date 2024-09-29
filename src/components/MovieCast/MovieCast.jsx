import { useMovie } from '../../hooks/useMovie.js';
import { imageBaseURL } from '../../api/api.js';
import css from '../MovieCast/MovieCast.module.css';

export default function MovieCast() {
	const { cast } = useMovie();

	const castWithPhoto = cast.filter(c => c.profile_path !== null);

	return (
		<div className={css.cast}>
			{castWithPhoto.length > 0 ? (
				castWithPhoto.slice(0, 20).map(c => (
					<div className={css.cast_card} key={c.id}>
						<div className={css.cast_image}>
							<img src={`${imageBaseURL}${c.profile_path}`} alt={`${c.name} photo`} />
						</div>
						<h3>{c.name}</h3>
						<p>as {c.character}</p>
					</div>
				))
			) : (
				<p>No cast available.</p>
			)}
		</div>
	);
}
