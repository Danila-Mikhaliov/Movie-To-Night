import { useNavigate, useParams } from "react-router-dom";
import "./MovieSelected.css";
import { useDispatch, useSelector } from "react-redux";
import { IMovieAlternative, IPersons, IStoreState } from "../../../types";
import { useEffect } from "react";
import { loadSelected } from "../../../redux/action-creators/movie-action-creators";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";

const MovieSelected = () => {
  const { movieId = "" } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSelected(movieId));
  }, []);
  const navigate = useNavigate();

  const movie = useSelector((state: IStoreState) => state.movie.selectedMovie);
  const { name, poster, year, movieLength, description, ageRating, genres } =
    movie;

  return (
    <div className="selected-movie">
      <div className="container">
        <div className="selected-movie__content">
          <div className="selected-movie__content-main">
            <img
              className="selected-movie__content-main-poster"
              src={poster?.url}
            />
            <div className="selected-movie__content-main-text">
              <p className="selected-movie__content-main-text-name">
                {name}({year})
              </p>
              <p className="selected-movie__content-main-text-info">
                {genres ? `${genres.map((el) => el.name + " ")}` : ""}
              </p>
              <p className="selected-movie__content-main-text-info">
                {ageRating
                  ? `Возрастной рейтинг: ${ageRating}+`
                  : "Возрастной рейтинг: 0+"}
              </p>
              <p className="selected-movie__content-main-text-info">
                {" "}
                {`Бюджет фильма ${movie.budget?.value} ${movie.budget?.currency}`}
              </p>
              <p className="selected-movie__content-main-text-info">
                {movieLength ? `Продолжительность: ${movieLength} мин` : ""}
              </p>
            </div>
          </div>
          <p className="selected-movie__content-text-description">
            {" "}
            {description}
          </p>
          <div className="selected-movie__content-trailer">
            {movie.videos?.trailers.map((el) => {
              if (el.type === "TRAILER") {
                return (
                  <iframe
                    className="selected-movie__content-trailer-link"
                    src={el?.url}
                  />
                );
              }
            })}
          </div>
          <div className="selected-movie__content-about">
            <Swiper
              style={{
                padding: "2rem",
              }}
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => {}}
              onSwiper={() => {}}
            >
              {movie.persons?.map((el: IPersons) => (
                <SwiperSlide
                  style={{
                    color: "white",
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    background: "rgba(66,37,95,0.8)",
                    borderRadius: "20px",
                    boxShadow: "9px 9px 21px 0px rgba(0, 0, 0, 0.2)",
                    fontFamily: "Roboto",
                  }}
                >
                  <img
                    className="selected-movie__content-about-photo"
                    src={el?.photo}
                  />
                  <p
                    style={{ fontWeight: "700" }}
                    className="selected-movie__content-about-text"
                  >
                    {el?.name}
                  </p>
                  <p className="selected-movie__content-about-text">
                    {" "}
                    {el.description}
                  </p>
                  <p className="selected-movie__content-about-text">
                    {el.profession}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="selected-movie__content-similarmovies">
            <Swiper
              style={{ padding: "2rem" }}
              spaceBetween={20}
              slidesPerView={3}
              onSlideChange={() => {}}
              onSwiper={() => {}}
            >
              {movie.similarMovies?.map((el: IMovieAlternative) => (
                <SwiperSlide
                  style={{
                    cursor: "pointer",
                    paddingTop: "1rem",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    background: "rgba(66,37,95,0.8)",
                    borderRadius: "20px",
                    boxShadow: "9px 9px 21px 0px rgba(0, 0, 0, 0.2)",
                    fontFamily: "Roboto",
                  }}
                  key={el.id}
                  onClick={() => {
                    navigate(`/movie/${el.id}`);
                    document.documentElement.scrollTop = 0;
                    document.location.reload();
                  }}
                >
                  <img
                    className="selected-movie__content-about-photo"
                    src={el?.poster?.url}
                  />
                  <p className="selected-movie__content-about-text">
                    {el?.name}
                  </p>
                  <p className="selected-movie__content-about-text">
                    {el.type}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieSelected;
