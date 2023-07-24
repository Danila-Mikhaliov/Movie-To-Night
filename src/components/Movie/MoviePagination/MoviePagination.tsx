import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MoviePagination.css";
import {
  loadMovie,
  setCurrentPage,
} from "../../../redux/action-creators/movie-action-creators";
import { IStoreState } from "../../../types";
import { Button } from "../../Button";

const MoviePagination = () => {
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
    <div className="movie-grid__pagination">
      <div className="container">
        <div className="movie-grid__pagination-content">
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
      </div>
    </div>
  );
};
export default MoviePagination;
