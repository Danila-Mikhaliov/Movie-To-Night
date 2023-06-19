export interface UserInfo {
  username: string;
}
export interface IMoviePoster {
  url: string;
  previewUrl: string;
}
export interface IMovieRating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: null;
}
export interface IMovieInfo {
  rating: any;
  type: string;
  id: number;
  movieLength: any;
  name: string;
  year: number;
  poster: any;
  ageRating: number;
}

export interface IMovieSearch {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  names: object;
  type: string;
  year: 1984;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  movieLength: number;
  genres: object;
  countries: object;
  releaseYears: object;
}
export interface IMovieResponse {
  docs: IMovieInfo[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovieState {
  movies: IMovieInfo[];
  randomMovie: IRandomMovie;
  selectedMovie: IRandomMovie;
  currentPage: number;
  pages: number;
  searchMovies: IMovieInfo[];
  sortField: string;
  movieType: string;
}
export interface IStoreState {
  movie: IMovieState;
  user: IUserState;
}
export interface IUserState {
  user: IUser;
}
export interface IUser {
  username?: string;
  password: string;
  email: string;
  id?: string;
}
export interface IButton {
  callback?: Function;
  content: any;
  isActive: boolean | Function;
  typeSubmit?: boolean;
}
export interface IGenres {
  name: string;
}
export interface IVideos {
  trailers: ITrailers[];
}
export interface ITrailers {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface IRandomMovie {
  id: number;
  alternativeName: string;
  collections: object;
  countries: object;
  createdAt: string;
  description: string;
  enName: null;
  externalId: object;
  facts: object;
  genres?: IGenres[];
  movieLength: number;
  name: string;
  names: object;
  persons: object;
  poster: IMoviePoster;
  productionCompanies: object;
  rating: IMovieRating;
  ratingMpaa: string;
  seasonsInfo: object;
  sequelsAndPrequels: object;
  shortDescription: null;
  similarMovies: object;
  slogan: null;
  spokenLanguages: object;
  status: null;
  technology: object;
  ticketsOnSale: boolean;
  type: string;
  typeNumber: number;
  updatedAt: string;
  videos: IVideos;
  votes: object;
  year: number;
  fees: object;
  imagesInfo: object;
  premiere: object;
  ageRating: null;
  backdrop: object;
  logo: object;
  budget: object;
  watchability: object;
  top10: null;
  top250: null;
  isSeries: boolean;
  seriesLength: null;
  totalSeriesLength: null;
}
export interface ISearchInfo {
  currentPage: number;
  sortField: string;
  movieType: string;
}
export interface IActivation {
  uid: string;
  token: string;
}
export interface IUserResponse {
  access: string;
  refresh: string;
}
