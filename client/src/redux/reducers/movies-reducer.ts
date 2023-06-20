import {
  IFoundMovieInfo,
  IFullPerson,
  IMovieInfo,
  IMovieState,
  IRandomMovieInfo,
  IReview,
  ISelectedMovie,
} from "../../types";
import {
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

const initialState = {
  randomMovie: {} as IRandomMovieInfo,
  movies: [] as IMovieInfo[],
  reviews: [] as IReview[],
  selectedMovie: {} as ISelectedMovie,
  foundMovies: [] as IFoundMovieInfo[],
  search: "",
  top10: [] as IMovieInfo[],
  year: "1860-2023",
  movieType: "",
  sortingType: -1,
  limit: 16,
  currentPage: 1,
  orderParam: "rating.kp",
  countOfPages: 1,
  genre: "",
  person: {} as IFullPerson,
};

const moviesReducer = (state: IMovieState = initialState, action: any) => {
  switch (action.type) {
    case SET_RANDOM_MOVIE: {
      const { randomMovie } = action;
      return {
        ...state,
        randomMovie,
      };
    }
    case SET_SEARCH: {
      const { search } = action;
      return {
        ...state,
        search,
      };
    }
    case SET_FOUND_MOVIES: {
      const { foundMovies } = action;
      return {
        ...state,
        foundMovies,
      };
    }
    case SET_TOP_10: {
      const { top10 } = action;
      return {
        ...state,
        top10,
      };
    }
    case SET_PERSON: {
      const { person } = action;
      return {
        ...state,
        person,
      };
    }
    case SET_REVIEWS: {
      const { reviews } = action;
      return {
        ...state,
        reviews,
      };
    }
    case SET_MOVIES: {
      const { movies } = action;
      return {
        ...state,
        movies,
      };
    }
    case SET_SELECTED_MOVIE: {
      const { selectedMovie } = action;
      return {
        ...state,
        selectedMovie,
      };
    }
    case SET_LIMIT_MOVIES: {
      const { limit } = action;
      return {
        ...state,
        limit,
      };
    }
    case SET_CURRENT_PAGE: {
      const { currentPage } = action;
      return {
        ...state,
        currentPage,
      };
    }
    case SET_MOVIE_GENRE: {
      const { genre } = action;
      return {
        ...state,
        genre,
      };
    }
    case SET_ORDER_PARAM: {
      const { orderParam } = action;
      return {
        ...state,
        orderParam,
      };
    }
    case SET_COUNT_OF_PAGES: {
      const { countOfPages } = action;
      return {
        ...state,
        countOfPages,
      };
    }
    case SET_MOVIE_YEAR: {
      const { year } = action;
      return {
        ...state,
        year,
      };
    }
    case SET_TYPE_OF_SORT: {
      const { sortingType } = action;
      return {
        ...state,
        sortingType,
      };
    }
    case SET_MOVIE_TYPE: {
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

export default moviesReducer;
