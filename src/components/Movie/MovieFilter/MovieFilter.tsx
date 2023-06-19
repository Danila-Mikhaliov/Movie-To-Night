import { useDispatch } from "react-redux";
import {
  setSortField,
  setMovieType,
} from "../../../redux/action-creators/movie-action-creators";
import "./MovieFilter.css";
const MovieFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <p className="movie-filter__name">Отфильтровать по :</p>
      <select
        className="movie-filter"
        onChange={(e) => dispatch(setSortField(e.target.value))}
      >
        <option className="movie-filter__option" value={"votes.kp"}>
          Отзывам
        </option>
        <option className="movie-filter__option" value={"rating.kp"}>
          Рейтингу
        </option>
        <option className="movie-filter__option" value={"year"}>
          Году выхода
        </option>
      </select>
      <p className="movie-filter__name">Тип:</p>
      <select
        className="movie-filter"
        onChange={(e) => dispatch(setMovieType(e.target.value))}
      >
        <option className="movie-filter__option" value={"movie"}>
          Фильм
        </option>
        <option className="movie-filter__option" value={"tv-series"}>
          Сериал
        </option>
        <option className="movie-filter__option" value={"cartoon"}>
          Мультфильм
        </option>
      </select>
    </div>
  );
};
export default MovieFilter;
