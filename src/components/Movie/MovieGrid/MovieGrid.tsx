import "./MovieGrid.css";
import { useEffect } from "react";
import { IMovieInfo, IStoreState } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMovie,
  setCurrentPage,
} from "../../../redux/action-creators/movie-action-creators";
import { MovieCard } from "../MovieCard";
import { MovieRecommendation } from "../MovieRecommendation";
import { Button } from "../../Button";
import { MovieFilter } from "../MovieFilter";

const MovieGrid = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: IStoreState) => state.movie.currentPage
  );
  const sortField = useSelector((state: IStoreState) => state.movie.sortField);
  const movieType = useSelector((state: IStoreState) => state.movie.movieType);
  useEffect(() => {
    dispatch(loadMovie({ currentPage, sortField, movieType }));
  }, [currentPage, sortField, movieType]);
  const allMovie = useSelector((state: IStoreState) => state.movie.movies);
  const total = useSelector((state: IStoreState) => state.movie.pages);

  return (
    <div className="movie-grid">
      <div className="container">
        <MovieRecommendation />
        <div className="movie-grid__pagination">
          <Button
            isActive={currentPage !== 1}
            content={"First page"}
            callback={() => dispatch(setCurrentPage(1))}
          />
          <Button
            isActive={currentPage !== 1}
            content={"<<"}
            callback={() => dispatch(setCurrentPage(currentPage - 1))}
          />
          <p className="movie-grid__pagination-page">{currentPage}</p>
          <Button
            isActive={currentPage !== total}
            content={">>"}
            callback={() => dispatch(setCurrentPage(currentPage + 1))}
          />
          <Button
            isActive={currentPage !== total}
            content={`${currentPage + 5} page`}
            callback={() => dispatch(setCurrentPage(currentPage + 5))}
          />
        </div>
        <MovieFilter />
        <div className="container">
          {allMovie.map(
            ({
              type,
              rating,
              id,
              movieLength,
              name,
              year,
              poster,
              ageRating,
            }: IMovieInfo) => (
              <MovieCard
                type={type}
                rating={rating}
                id={id}
                movieLength={movieLength}
                name={name}
                year={year}
                poster={poster}
                ageRating={ageRating}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieGrid;
