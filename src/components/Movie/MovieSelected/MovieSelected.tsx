import { useParams } from "react-router-dom";
import "./MovieSelected.css";
import { useDispatch, useSelector } from "react-redux";
import { IMovieInfo, IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSelected } from "../../../redux/action-creators/movie-action-creators";

const MovieSelected = () => {
  const { movieId = "" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSelected(movieId));
  }, []);
  const movie = useSelector((state: IStoreState) => state.movie.selectedMovie);
  const { name, poster, year, movieLength, description, ageRating, genres } =
    movie;
  const trailer = movie.videos.trailers;
  return (
    <div className="container">
      <div className="selected-movie">
        <img className="selected-movie__content-poster" src={poster?.url} />
        <div className="selected-movie__content">
          <p className="selected-movie__content-name">
            {name}({year})
          </p>
          <p className="selected-movie__content-age">
            {genres ? `${genres.map((el) => el.name + " ")}` : ""}
          </p>
          <p className="selected-movie__content-age">
            {ageRating
              ? `Возрастной рейтинг: ${ageRating}+`
              : "Возрастной рейтинг: 0+"}
          </p>
          <p className="selected-movie__content-length">
            {movieLength ? `Продолжительность: ${movieLength} мин` : ""}
          </p>
          <p className="selected-movie__content-description"> {description}</p>
          <div>
            {trailer.map((el) => (
              <video src={el.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieSelected;
