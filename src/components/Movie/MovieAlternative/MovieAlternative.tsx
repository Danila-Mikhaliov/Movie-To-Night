import { IMovieAlternative } from "../../../types";
import "./MovieAlternative.css";
const MovieAlternative = (props: IMovieAlternative) => {
  const { name, id, type } = props;
  return (
    <div className="swiper-slide">
      <div className="movie-alt__content" id={id.toString()}>
        <img className="movie-alt__content-poster" src={props.poster.url} />
        <p className="movie-alt__content-name">{name}</p>
      </div>
    </div>
  );
};
export default MovieAlternative;
