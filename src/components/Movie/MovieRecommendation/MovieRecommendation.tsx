import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadRandom } from "../../../redux/action-creators/movie-action-creators";
import { IStoreState } from "../../../types";
import "./MovieRecommendation.css";

const MovieRecommendation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRandom());
  }, []);
  const random = useSelector((state: IStoreState) => state.movie.randomMovie);
  return (
    <div className="movie-recommendation">
      <div className="container">
        <div className="movie-recommendation__content">
          <img
            className="movie-recommendation__content-poster"
            src={random.poster?.url}
          />
          <div className="movie-recommendation__content-info">
            <NavLink to={`/movie/${random.id}`} className="movie-card__name">
              {random.name}
            </NavLink>
            <p className="movie-recommendation__content-info-year">
              {random.year}
            </p>
            <p className="movie-recommendation__content-info-length">
              {random.movieLength ? `${random.movieLength} минуты` : ""}
            </p>
            <p className="movie-recommendation__content-info-description">
              {random.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRecommendation;
