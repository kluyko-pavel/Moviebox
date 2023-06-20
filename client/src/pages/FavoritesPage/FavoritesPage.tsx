import { useSelector } from "react-redux";
import { Banner, Movie } from "../../components";
import { IMovieInfo, IStoreState } from "../../types";

export const FavoritesPage = () => {
  const favorites = useSelector((state: IStoreState) => state.user.favorites);
  return (
    <section className="favorites-page">
      <Banner />
      <div className="container">
        <header id="category-header" className="category-header">
          <div className="category-header-name">
            <h3 className="category-header-name__title">Избранное</h3>
          </div>
        </header>
        <div className="movies-grid">
          {favorites.map((movie: IMovieInfo) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
