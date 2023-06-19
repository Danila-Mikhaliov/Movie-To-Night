import { IMovieResponse, IRandomMovie, ISearchInfo } from "./../../types";
import { IMovieInfo } from "../../types";
import {
  SET_CURRENTPAGE,
  LOAD_MOVIE,
  LOAD_RANDOM,
  SET_MOVIES,
  SET_RANDOM,
  LOAD_SELECTED,
  SET_SELECTED,
  SET_TOTALPAGES,
  LOAD_SEARCH,
  SET_SEARCH,
  SET_SORTFIELD,
  SET_MOVIETYPE,
} from "../action-types/movie-action-types";
import { put, takeEvery } from "redux-saga/effects";

const loadMovie = (searchInfo: ISearchInfo) => ({
  type: LOAD_MOVIE,
  searchInfo,
});
const setMovies = (movies: IMovieInfo[]) => ({
  type: SET_MOVIES,
  movies,
});
const loadRandom = () => ({
  type: LOAD_RANDOM,
});
const setRandom = (randomMovie: IRandomMovie) => ({
  type: SET_RANDOM,
  randomMovie,
});
const loadSelected = (id: string) => ({
  type: LOAD_SELECTED,
  id,
});
const setSelected = (selectedMovie: IRandomMovie) => ({
  type: SET_SELECTED,
  selectedMovie,
});
const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENTPAGE,
  currentPage,
});
const setTotalPages = (pages: number) => ({
  type: SET_TOTALPAGES,
  pages,
});
const loadSearchMovie = (search: string) => ({
  type: LOAD_SEARCH,
  search,
});
const setSearchMovie = (searchMovies: IMovieInfo[]) => ({
  type: SET_SEARCH,
  searchMovies,
});
const setSortField = (sortField: string) => ({
  type: SET_SORTFIELD,
  sortField,
});
const setMovieType = (movieType: string) => ({
  type: SET_MOVIETYPE,
  movieType,
});

function* fetchMovie(action: any) {
  const { currentPage, sortField, movieType } = action.searchInfo;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1.3/movie?year=1980-2023&type=${movieType}&sortField=${sortField}&selectFields=name&selectFields=id&selectFields=year&selectFields=rating&selectFields=movieLength&selectFields=type&selectFields=ageRating&selectFields=poster&page=${currentPage}&limit=10`,
    {
      method: "get",
      headers: { "X-API-KEY": "KQ0D10Z-MX7MEQH-PA0EECD-R803W11" },
      body: JSON.stringify(action.movie),
    }
  );
  const data: IMovieResponse = yield resp.json();
  yield put(setMovies(data.docs));
  yield put(setTotalPages(data.pages));
}

function* fetchRandomMovie(action: any) {
  const resp: Response = yield fetch(
    "https://api.kinopoisk.dev/v1.3/movie/random",
    {
      method: "get",
      headers: { "X-API-KEY": "KQ0D10Z-MX7MEQH-PA0EECD-R803W11" },
      body: JSON.stringify(action.randomMovie),
    }
  );
  const data: IRandomMovie = yield resp.json();
  yield put(setRandom(data));
}

function* fetchSelectedMovie(action: any) {
  const { id } = action;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1.3/movie/${id}`,
    {
      method: "get",
      headers: { "X-API-KEY": "KQ0D10Z-MX7MEQH-PA0EECD-R803W11" },
      body: JSON.stringify(action.selectedMovie),
    }
  );
  const data: IRandomMovie = yield resp.json();
  yield put(setSelected(data));
}

function* fetchSearchMovie(action: any) {
  const { search } = action;
  const encode = encodeURI(search);
  console.log(encode);
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=30&query=${encode}`,
    {
      method: "get",
      headers: { "X-API-KEY": "KQ0D10Z-MX7MEQH-PA0EECD-R803W11" },
      body: JSON.stringify(action.searchMovie),
    }
  );
  const data: IMovieResponse = yield resp.json();
  console.log(data);
  yield put(setSearchMovie(data.docs));
}

function* watcherMovie() {
  yield takeEvery(LOAD_MOVIE, fetchMovie);
  yield takeEvery(LOAD_RANDOM, fetchRandomMovie);
  yield takeEvery(LOAD_SELECTED, fetchSelectedMovie);
  yield takeEvery(LOAD_SEARCH, fetchSearchMovie);
}

export {
  setSortField,
  loadMovie,
  watcherMovie,
  loadRandom,
  loadSelected,
  setCurrentPage,
  loadSearchMovie,
  setMovieType,
};
