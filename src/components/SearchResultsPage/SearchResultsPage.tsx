import "./SearchResultsPage.css";
import { MovieCard } from "../Movie/MovieCard";
import { useSelector } from "react-redux";
import { IMovieInfo, IMovieSearch, IStoreState } from "../../types";

const SearchResultsPage = () => {
  const searchResults = useSelector(
    (state: IStoreState) => state.movie.searchMovies
  );
  return (
    <div className="container">
      <div className="movie-row">
        {searchResults.map(
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
              rating={
                rating
                  ? rating
                  : {
                      kp: 0,
                      imdb: 0,
                      filmCritics: 0,
                      russianFilmCritics: 0,
                      await: null,
                    }
              }
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
  );
};

export default SearchResultsPage;
