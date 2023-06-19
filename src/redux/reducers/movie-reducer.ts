import { IRandomMovie } from "./../../types";
import { IMovieInfo } from "../../types";
import {
  SET_CURRENTPAGE,
  SET_MOVIES,
  SET_MOVIETYPE,
  SET_RANDOM,
  SET_SEARCH,
  SET_SELECTED,
  SET_SORTFIELD,
  SET_TOTALPAGES,
} from "../action-types/movie-action-types";

const initialState = {
  movies: [] as IMovieInfo[],
  randomMovie: {} as IRandomMovie,
  selectedMovie: {} as IRandomMovie,
  pages: 0,
  currentPage: 1,
  searchMovies: [] as IRandomMovie[],
  sortField: "votes.kp",
  movieType: "movie",
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MOVIES: {
      const { movies } = action;
      return {
        ...state,
        movies,
      };
    }
    case SET_RANDOM: {
      const { randomMovie } = action;
      return {
        ...state,
        randomMovie,
      };
    }
    case SET_SELECTED: {
      const { selectedMovie } = action;
      return {
        ...state,
        selectedMovie,
      };
    }
    case SET_CURRENTPAGE: {
      const { currentPage } = action;
      return {
        ...state,
        currentPage,
      };
    }
    case SET_TOTALPAGES: {
      const { pages } = action;
      return {
        ...state,
        pages,
      };
    }
    case SET_SEARCH: {
      const { searchMovies } = action;
      return {
        ...state,
        searchMovies,
      };
    }
    case SET_SORTFIELD: {
      const { sortField } = action;
      return {
        ...state,
        sortField,
      };
    }
    case SET_MOVIETYPE: {
      const { movieType } = action;
      return {
        ...state,
        movieType,
      };
    }
    default: {
      return state;
    }
  }
};
export default movieReducer;
