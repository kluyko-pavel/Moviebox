import { useDispatch, useSelector } from "react-redux";
import { Banner, FoundMovie, Pagination } from "../../components";
import "./SearchPage.scss";
import { IFoundMovieInfo, IStoreState } from "../../types";
import { useEffect } from "react";
import { loadFoundMovies } from "../../redux/action-creators/movies-action_creators";

export const SearchPage = () => {
  const limit = useSelector((state: IStoreState) => state.movies.limit);
  const currentPage = useSelector(
    (state: IStoreState) => state.movies.currentPage
  );
  const search = useSelector((state: IStoreState) => state.movies.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFoundMovies({ limit, currentPage, search }));
  }, [limit, currentPage, search]);

  const foundMovies = useSelector(
    (state: IStoreState) => state.movies.foundMovies
  );

  return (
    <section className="search-page">
      <Banner />
      <div className="container">
        <div className="search-results">
          <header className="search-results__header">
            <h3 className="search-results__header-title">Результаты поиска</h3>
          </header>
          <div className="movies-grid">
            {foundMovies.map((foundMovie: IFoundMovieInfo) => (
              <FoundMovie key={foundMovie.id} movie={foundMovie} />
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};
