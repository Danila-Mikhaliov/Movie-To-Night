import "./MovieGrid.css";
import { useEffect, useState } from "react";
import { IMovieInfo, IStoreState } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { loadMovie } from "../../../redux/action-creators/movie-action-creators";
import { MovieCard } from "../MovieCard";
import { MovieRecommendation } from "../MovieRecommendation";
import { MovieFilter } from "../MovieFilter";
import { MoviePagination } from "../MoviePagination";

const MovieGrid = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: IStoreState) => state.movie.currentPage
  );
  const isLoading = useSelector((state: IStoreState) => state.movie.isLoading);
  const sortField = useSelector((state: IStoreState) => state.movie.sortField);
  const movieType = useSelector((state: IStoreState) => state.movie.movieType);
  useEffect(() => {
    dispatch(loadMovie({ currentPage, sortField, movieType }));
  }, [currentPage, sortField, movieType]);

  const allMovie = useSelector((state: IStoreState) => state.movie.movies);
  return (
    <div className="movie-grid">
      <MovieRecommendation />
      <div className="container">
        <MoviePagination />
        <MovieFilter />
        <div className="movie-row">
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
