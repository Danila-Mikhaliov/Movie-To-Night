import { useParams } from "react-router-dom";
import "./MovieSelected.css";
import { useDispatch, useSelector } from "react-redux";
import { IMovieAlternative, IMovieInfo, IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSelected } from "../../../redux/action-creators/movie-action-creators";
import { MovieAlternative } from "../MovieAlternative";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MovieSelected = () => {
  const { movieId = "" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSelected(movieId));
  }, []);

  const movie = useSelector((state: IStoreState) => state.movie.selectedMovie);
  const { name, poster, year, movieLength, description, ageRating, genres } =
    movie;
  console.log(movie.similarMovies);
  return (
    <div className="container">
      <div className="selected-movie">
        <img className="selected-movie__content-poster" src={poster?.url} />
        <div className="selected-movie__content">
          <p className="selected-movie__content-name">
            {name}({year})
          </p>
          <p className="selected-movie__content-text">
            {genres ? `${genres.map((el) => el.name + " ")}` : ""}
          </p>
          <p className="selected-movie__content-text">
            {ageRating
              ? `Возрастной рейтинг: ${ageRating}+`
              : "Возрастной рейтинг: 0+"}
          </p>
          <p className="selected-movie__content-text">
            {" "}
            {`Бюджет фильма ${movie.budget?.value} ${movie.budget?.currency}`}
          </p>
          <p className="selected-movie__content-length">
            {movieLength ? `Продолжительность: ${movieLength} мин` : ""}
          </p>
          <p className="selected-movie__content-description"> {description}</p>
        </div>
      </div>
      {movie.videos?.trailers.map((el) => {
        if (el.type === "TRAILER") {
          return (
            <iframe className="selected-movie__content-trailer" src={el?.url} />
          );
        }
      })}

      {/* <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movie?.similarMovies.map((el) => (
          <SwiperSlide>
            <MovieAlternative
              name={el.name}
              poster={el.poster}
              alternativeName={el.alternativeName}
              id={el.id}
              type={el.type}
              enName={el.enName}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};
export default MovieSelected;
