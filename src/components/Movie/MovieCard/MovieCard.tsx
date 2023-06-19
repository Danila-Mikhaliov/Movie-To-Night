import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { IMovieInfo } from "../../../types";
import "./MovieCard.css";
const MovieCard = (props: IMovieInfo) => {
  const { rating, id, movieLength, name, year, poster, ageRating, type } =
    props;
  let rate = "";
  if (typeof rating === "object") {
    rate = rating.kp;
  } else {
    rate = rating;
  }
  const navigate = useNavigate();
  return (
    <div
      key={id}
      onClick={() => navigate(`/movie/${id}`)}
      className="movie-card"
    >
      <img
        className="movie-card__poster"
        src={poster?.url ? poster.url : poster}
      />
      <div className="movie-card__content">
        <div
          className="movie-card__rating"
          style={
            +rate >= 7
              ? { backgroundColor: "green" }
              : +rate >= 4
              ? { backgroundColor: "orange" }
              : { backgroundColor: "red" }
          }
        >
          {Number(rate).toFixed(1)}
        </div>
        <p className="movie-card__name">{name}</p>
        <div className="movie-card__info">
          <p>{year ? `Дата выхода ${year}` : ""}</p>
          <p>
            {type === "movie"
              ? "Фильм"
              : type === "tv-series"
              ? "Сериал"
              : type === "cartoon"
              ? "Мультфильм"
              : ""}
          </p>
          <p>{movieLength ? `Продолжительность ${movieLength} мин.` : ""} </p>
          <p>{ageRating ? `Возрастной рейтинг: ${ageRating} лет` : ""}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
