export interface IStoreState {
  movies: IMovieState;
  ui: IUiState;
  user: IUserState;
}

export interface IMovieState {
  randomMovie: IRandomMovieInfo;
  movies: IMovieInfo[];
  reviews: IReview[];
  selectedMovie: ISelectedMovie;
  foundMovies: IFoundMovieInfo[];
  search: string;
  top10: IMovieInfo[];
  person: IFullPerson;
  limit: number;
  currentPage: number;
  orderParam: string;
  countOfPages: number;
  year: string;
  movieType: string;
  sortingType: number;
  genre: string;
}

export interface IUiState {
  isLoading: boolean;
  isLoadingRandom: boolean;
  modalInfo: IModal;
}

export interface IUserState {
  favorites: IMovieInfo[];
  user: IUserInfo;
  isAuth: boolean;
}

export interface IReviewResponse {
  docs: IReview[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IFoundMovieInfo {
  id: number;
  name: string;
  alternativeName: any;
  enName: any;
  names: any;
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  logo: any;
  poster: string;
  backdrop: any;
  rating: number;
  votes: number;
  movieLength: number;
  genres: string[];
  countries: string[];
  releaseYears: any;
}

export interface IMovieInfo {
  id: number;
  name: string;
  names: any;
  movieLength: number;
  rating: {
    kp: any;
    imdb: any;
    filmCritics: any;
    russianFilmCritics: any;
    await: null;
  };
  type: string;
  description: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: IGenre[];
  countries: IGenre[];
  shortDescription: string;
  logo: {
    url: string;
  };
  watchability: {
    items: IWatchability[];
  };
}

export interface IReview {
  id: number;
  movieId: number;
  title: string;
  type: string;
  review: string;
  date: string;
  author: string;
}

export interface IModal {
  text?: string;
  showModal: boolean;
}

export interface IInput {
  labelName: string;
  type: string;
  name: string;
  callback: Function;
  value?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  isActive?: boolean;
}

export interface IUserInfo {
  id: string;
  email: string;
  isActivated: boolean;
}

export interface ISimilarMovie {
  id: number;
  name: string;
  enName: any;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
}

export interface IFact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface IPersonMovie {
  id: number;
  name: any;
  alternativeName: any;
  rating: any;
  general: boolean;
  description: any;
}

export interface IFullPerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  profession: any;
  isParse: true;
  birthPlace: any;
  deathPlace: any;
  facts: any;
  movies: IPersonMovie[];
  age: any;
  birthday: any;
  countAwards: any;
  death: any;
  growth: any;
  sex: any;
  spouses: any;
  updatedAt: string;
}

export interface IPerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  profession: string;
  enProfession: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserInfo;
}

export interface IAuthInfo {
  email: string;
  password: string;
}

export interface ITrailer {
  url: string;
  name: string;
  site: string;
}

export interface ISelectedMovie {
  videos: {
    trailers: ITrailer[];
    teasers: [];
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
    usa: {
      value: number;
      currency: string;
    };
  };
  id: number;
  type: string;
  externalId: Object;
  name: string;
  rating: {
    kp: any;
    imdb: any;
    filmCritics: any;
    russianFilmCritics: any;
    await: any;
  };
  description: string;
  votes: Object;
  distributors: Object;
  premiere: Object;
  slogan: string;
  year: number;
  budget: {
    value: number;
    currency: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  facts: IFact[];
  genres: IGenre[];
  countries: IGenre[];
  seasonsInfo: any;
  persons: IPerson[];
  images: Object;
  lists: any;
  spokenLanguages: [];
  productionCompanies: [];
  typeNumber: number;
  alternativeName: string;
  backdrop: {
    url: any;
    previewUrl: any;
  };
  enName: any;
  movieLength: number;
  names: [];
  networks: any;
  status: any;
  subType: any;
  updateDates: any;
  ageRating: any;
  ratingMpaa: any;
  updatedAt: any;
  shortDescription: any;
  technology: {
    hasImax: any;
    has3D: any;
  };
  ticketsOnSale: boolean;
  similarMovies: ISimilarMovie[];
  sequelsAndPrequels: any;
  logo: {
    url: any;
  };
  watchability: {
    items: any;
  };
  top10: any;
  top250: any;
  audience: [];
  deletedAt: any;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
}

export interface ISearchInfo {
  limit: number;
  currentPage: number;
  orderParam?: string;
  year?: string;
  movieType?: string;
  sortingType?: number;
  genre?: string;
  search?: string;
}

export interface IMoviesResponse {
  docs: IMovieInfo[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IFoundMoviesResponse {
  docs: IFoundMovieInfo[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IGenre {
  name: string;
}

export interface IWatchability {
  name: string;
  logo: {
    url: string;
  };
  url: string;
}

export interface IRandomMovieInfo {
  status: any;
  externalId: Object;
  rating: {
    kp: any;
    imdb: any;
    filmCritics: any;
    russianFilmCritics: any;
    await: null;
  };
  votes: Object;
  backdrop: {
    url: string;
    previewUrl: string;
  };
  images: Object;
  productionCompanies: any;
  spokenLanguages: any;
  id: number;
  type: string;
  name: string;
  networks?: any;
  subType?: any;
  description: string;
  distributors: Object;
  collections?: any;
  premiere: Object;
  slogan: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  isSeries?: any;
  seriesLength?: any;
  totalSeriesLength?: any;
  facts: any;
  genres: Object[];
  audience?: any;
  countries: Object[];
  videos: Object;
  seasonsInfo: [];
  persons: Object[];
  lists: [];
  typeNumber: number;
  alternativeName: any;
  enName: any;
  names: Object[];
  sequelsAndPrequels: [];
  updatedAt: string;
  imagesInfo?: any;
  similarMovies: [];
  movieLength: any;
  ratingMpaa: any;
  shortDescription: any;
  technology: any;
  ticketsOnSale: boolean;
  fees: Object;
  updateDates?: any;
  budget: Object;
  ageRating: any;
  logo: Object;
  watchability: Object;
  releaseYears?: any;
  top10: any;
  top250: any;
  deletedAt?: any;
}
