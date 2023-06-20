import { put, takeEvery } from "redux-saga/effects";
import {
  IFoundMovieInfo,
  IFoundMoviesResponse,
  IFullPerson,
  IMovieInfo,
  IMoviesResponse,
  IRandomMovieInfo,
  IReview,
  IReviewResponse,
  ISearchInfo,
  ISelectedMovie,
} from "../../types";
import {
  LOAD_FOUND_MOVIES,
  LOAD_MOVIES,
  LOAD_PERSON,
  LOAD_RANDOM_MOVIE,
  LOAD_REVIEWS,
  LOAD_SELECTED_MOVIE,
  LOAD_TOP_10,
  SET_COUNT_OF_PAGES,
  SET_CURRENT_PAGE,
  SET_FOUND_MOVIES,
  SET_LIMIT_MOVIES,
  SET_MOVIES,
  SET_MOVIE_GENRE,
  SET_MOVIE_TYPE,
  SET_MOVIE_YEAR,
  SET_ORDER_PARAM,
  SET_PERSON,
  SET_RANDOM_MOVIE,
  SET_REVIEWS,
  SET_SEARCH,
  SET_SELECTED_MOVIE,
  SET_TOP_10,
  SET_TYPE_OF_SORT,
} from "../action-types/movies-action_types";
import { MOVIE_INFO_URL } from "../../constants";
import { toggleIsLoading, toggleIsLoadingRandom } from "./ui-action_creators";

export const setPerson = (person: IFullPerson) => ({
  type: SET_PERSON,
  person,
});

export const setSearch = (search: string) => ({
  type: SET_SEARCH,
  search,
});

export const setFoundMovies = (foundMovies: IFoundMovieInfo[]) => ({
  type: SET_FOUND_MOVIES,
  foundMovies,
});

export const loadFoundMovies = (searchInfo: ISearchInfo) => ({
  type: LOAD_FOUND_MOVIES,
  searchInfo,
});

export const setRandomMovie = (randomMovie: IRandomMovieInfo) => ({
  type: SET_RANDOM_MOVIE,
  randomMovie,
});

export const setMovies = (movies: IMovieInfo[]) => ({
  type: SET_MOVIES,
  movies,
});

export const loadRandomMovie = () => ({
  type: LOAD_RANDOM_MOVIE,
});

export const loadTop10 = () => ({
  type: LOAD_TOP_10,
});

export const setTop10 = (top10: IMovieInfo[]) => ({
  type: SET_TOP_10,
  top10,
});

export const loadReviews = (movieId: string) => ({
  type: LOAD_REVIEWS,
  movieId,
});

export const loadSelectedMovie = (id: string) => ({
  type: LOAD_SELECTED_MOVIE,
  id,
});

export const loadPerson = (id: string) => ({
  type: LOAD_PERSON,
  id,
});

export const setSelectedMovie = (selectedMovie: ISelectedMovie) => ({
  type: SET_SELECTED_MOVIE,
  selectedMovie,
});

export const setReviews = (reviews: IReview[]) => ({
  type: SET_REVIEWS,
  reviews,
});

export const loadMovies = (searchInfo: ISearchInfo) => ({
  type: LOAD_MOVIES,
  searchInfo,
});

export const setLimitMovies = (limit: number) => ({
  type: SET_LIMIT_MOVIES,
  limit,
});

export const setMovieYear = (year: number) => ({
  type: SET_MOVIE_YEAR,
  year,
});

export const setMovieType = (movieType: string) => ({
  type: SET_MOVIE_TYPE,
  movieType,
});

export const setMovieGenre = (genre: string) => ({
  type: SET_MOVIE_GENRE,
  genre,
});

export const setTypeOfSort = (sortingType: string) => ({
  type: SET_TYPE_OF_SORT,
  sortingType,
});

export const setCountOfPages = (countOfPages: number) => ({
  type: SET_COUNT_OF_PAGES,
  countOfPages,
});

export const setOrderParam = (orderParam: number) => ({
  type: SET_ORDER_PARAM,
  orderParam,
});

export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

function* fetchMovies(action: any) {
  yield put(toggleIsLoading(true));
  const {
    orderParam,
    currentPage,
    limit,
    year,
    sortingType,
    genre,
    movieType,
  } = action.searchInfo;
  const resp: Response = yield fetch(
    !movieType
      ? !genre
        ? `${MOVIE_INFO_URL}&sortField=${orderParam}&page=${currentPage}&limit=${limit}&year=${year}&sortType=${sortingType}`
        : `${MOVIE_INFO_URL}&sortField=${orderParam}&page=${currentPage}&limit=${limit}&year=${year}&sortType=${sortingType}&genres.name=${genre}`
      : !genre
      ? `${MOVIE_INFO_URL}&sortField=${orderParam}&page=${currentPage}&limit=${limit}&year=${year}&sortType=${sortingType}&type=${movieType}`
      : `${MOVIE_INFO_URL}&sortField=${orderParam}&page=${currentPage}&limit=${limit}&year=${year}&sortType=${sortingType}&type=${movieType}&genres.name=${genre}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV        ",
      },
    }
  );
  const res: IMoviesResponse = yield resp.json();
  yield put(setMovies(res.docs));
  yield put(setCountOfPages(res.pages));
  yield put(toggleIsLoading(false));
}

function* fetchRandomMovie() {
  yield put(toggleIsLoadingRandom(true));
  const resp: Response = yield fetch(
    "https://api.kinopoisk.dev/v1.3/movie/random",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV        ",
      },
    }
  );
  const res: IRandomMovieInfo = yield resp.json();
  yield put(setRandomMovie(res));
  yield put(toggleIsLoadingRandom(false));
}
function* fetchTop10() {
  const resp: Response = yield fetch(
    "https://api.kinopoisk.dev/v1.3/movie?top10=!null",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV",
      },
    }
  );
  const res: IMoviesResponse = yield resp.json();
  yield put(setTop10(res.docs));
}

function* fetchSelectedMovie(action: any) {
  yield put(toggleIsLoading(true));
  const { id } = action;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1.3/movie/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV        ",
      },
    }
  );
  const res: ISelectedMovie = yield resp.json();
  yield put(setSelectedMovie(res));
  yield put(toggleIsLoading(false));
}

function* fetchPerson(action: any) {
  yield put(toggleIsLoading(true));
  const { id } = action;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1/person/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV        ",
      },
    }
  );
  const res: IFullPerson = yield resp.json();
  yield put(setPerson(res));
  yield put(toggleIsLoading(false));
}

function* fetchReviews(action: any) {
  yield put(toggleIsLoading(true));
  const { movieId } = action;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1/review?movieId=${movieId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV  ",
      },
    }
  );
  const res: IReviewResponse = yield resp.json();
  yield put(setReviews(res.docs));
  yield put(toggleIsLoading(false));
}

function* fetchFoundMovies(action: any) {
  yield put(toggleIsLoading(true));
  const { limit, search, currentPage } = action.searchInfo;
  const resp: Response = yield fetch(
    `https://api.kinopoisk.dev/v1.2/movie/search?query=${search}&limit=${limit}&page=${currentPage}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "7443A57-GJGM92P-MRXPRPA-D8NRQGV  ",
      },
    }
  );
  const res: IFoundMoviesResponse = yield resp.json();
  yield put(setFoundMovies(res.docs));
  yield put(setCountOfPages(res.pages));
  yield put(toggleIsLoading(false));
}

export function* watcherMovie() {
  yield takeEvery(LOAD_RANDOM_MOVIE, fetchRandomMovie);
  yield takeEvery(LOAD_MOVIES, fetchMovies);
  yield takeEvery(LOAD_SELECTED_MOVIE, fetchSelectedMovie);
  yield takeEvery(LOAD_PERSON, fetchPerson);
  yield takeEvery(LOAD_REVIEWS, fetchReviews);
  yield takeEvery(LOAD_TOP_10, fetchTop10);
  yield takeEvery(LOAD_FOUND_MOVIES, fetchFoundMovies);
}
