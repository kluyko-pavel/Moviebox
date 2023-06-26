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
        {favorites.length ? (
          <div className="movies-grid">
            {favorites.map((movie: IMovieInfo) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <h3
            className="favorites-page__empty"
            style={{
              padding: "48px",
              color: "#fff",
              fontFamily: "Jost",
            }}
          >
            Тут пока пусто...
          </h3>
        )}
      </div>
    </section>
  );
};
