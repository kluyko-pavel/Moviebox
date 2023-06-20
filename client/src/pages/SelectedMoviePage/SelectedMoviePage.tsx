import "./SelectedMoviePage.scss";
import { Movie, SelectedMovie } from "../../components";
import { useEffect } from "react";
import { loadTop10 } from "../../redux/action-creators/movies-action_creators";
import { useDispatch, useSelector } from "react-redux";
import { IMovieInfo, IStoreState } from "../../types";

export const SelectedMoviePage = () => {
  const top10 = useSelector((state: IStoreState) => state.movies.top10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTop10());
  }, []);

  return (
    <section className="selected-movie-page">
      <SelectedMovie />
      <div className="top-10">
        <div className="container">
          <header className="top-10__header">
            <h3 className="top10__header-title">Лучшее. Топ 10</h3>
          </header>
          <div className="movies-grid">
            {top10.map((movie: IMovieInfo) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
