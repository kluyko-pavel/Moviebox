import { useDispatch, useSelector } from "react-redux";
import "./MoviesGrid.scss";
import { useEffect } from "react";
import { IMovieInfo, IStoreState } from "../../../types";
import { Movie } from "../Movie/Movie";
import {
  loadMovies,
  setCountOfPages,
  setCurrentPage,
  setLimitMovies,
} from "../../../redux/action-creators/movies-action_creators";
import { CardSkeleton } from "../../CardSkeleton";

export const MoviesGrid = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);
  const limit = useSelector((state: IStoreState) => state.movies.limit);
  const year = useSelector((state: IStoreState) => state.movies.year);
  const sortingType = useSelector(
    (state: IStoreState) => state.movies.sortingType
  );
  const currentPage = useSelector(
    (state: IStoreState) => state.movies.currentPage
  );
  const genre = useSelector((state: IStoreState) => state.movies.genre);
  const movieType = useSelector((state: IStoreState) => state.movies.movieType);
  const movies = useSelector((state: IStoreState) => state.movies.movies);
  const orderParam = useSelector(
    (state: IStoreState) => state.movies.orderParam
  );

  useEffect(() => {
    dispatch(
      loadMovies({
        limit,
        currentPage,
        orderParam,
        year,
        sortingType,
        genre,
        movieType,
      })
    );
  }, [limit, currentPage, orderParam, year, sortingType, genre, movieType]);

  return (
    <div className="movies-grid">
      {isLoading ? (
        <CardSkeleton cards={8} />
      ) : (
        movies.map((movie: IMovieInfo) => (
          <Movie key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
};
