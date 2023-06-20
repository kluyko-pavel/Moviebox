import { useDispatch, useSelector } from "react-redux";
import { Banner, MoviesGrid, Pagination } from "../../components";
import "./MainPage.scss";
import {
  setLimitMovies,
  setMovieGenre,
  setMovieType,
  setMovieYear,
  setOrderParam,
  setTypeOfSort,
} from "../../redux/action-creators/movies-action_creators";
import { IStoreState } from "../../types";

export const MainPage = () => {
  const movieType = useSelector((state: IStoreState) => state.movies.movieType);
  const limit = useSelector((state: IStoreState) => state.movies.limit);
  const genre = useSelector((state: IStoreState) => state.movies.genre);
  const orderParam = useSelector(
    (state: IStoreState) => state.movies.orderParam
  );
  const sortingType = useSelector(
    (state: IStoreState) => state.movies.sortingType
  );
  const year = useSelector((state: IStoreState) => state.movies.year);
  const dispatch = useDispatch();

  const handleSwitchOrderParam = (e: any) => {
    dispatch(setOrderParam(e.target.value));
  };
  const handleSwitchSortType = (e: any) => {
    dispatch(setTypeOfSort(e.target.value));
  };
  const handleSwitchYear = (e: any) => {
    dispatch(setMovieYear(e.target.value));
  };
  const handleSwitchLimit = (e: any) => {
    dispatch(setLimitMovies(e.target.value));
  };
  const handleSwitchMovieType = (e: any) => {
    dispatch(setMovieType(e.target.value));
  };
  const handleSwitchGenre = (e: any) => {
    dispatch(setMovieGenre(e.target.value));
  };

  return (
    <section className="main-page">
      <Banner />
      <div className="container">
        <header id="category-header" className="category-header">
          <div className="category-header-name">
            <p className="category-header-name__subtitle">ЛУЧШИЙ ВЫБОР</p>
            <h3 className="category-header-name__title">
              {movieType
                ? `${
                    movieType === "movie"
                      ? "Фильмы"
                      : movieType === "cartoon"
                      ? "Мультфильмы"
                      : movieType === "tv-series"
                      ? "Сериалы"
                      : movieType === "anime"
                      ? "Аниме"
                      : "Мульт-Сериалы"
                  }`
                : "Подборка"}
            </h3>
          </div>
          <div className="category-header-filters">
            <label className="category-header-filters__filter">
              Сортировка
              <select
                name="sorting"
                value={orderParam}
                onChange={handleSwitchOrderParam}
              >
                <option value="rating.kp">По рейтингу</option>
                <option value="movieLength">По длительности</option>
                <option value="year">По году</option>
              </select>
            </label>

            <label className="category-header-filters__filter">
              Тип сортировки
              <select
                name="type-of-sorting"
                value={sortingType}
                onChange={handleSwitchSortType}
              >
                <option value={-1}>По убыванию</option>
                <option value={1}>По возрастанию</option>
              </select>
            </label>

            <label className="category-header-filters__filter">
              Жанр
              <select name="genre" value={genre} onChange={handleSwitchGenre}>
                <option value={""}>Все</option>
                <option value={"боевик"}>Боевик</option>
                <option value={"приключения"}>Приключение</option>
                <option value={"фэнтези"}>Фэнтези</option>
                <option value={"драма"}>Драма</option>
                <option value={"документальный"}>Документальный</option>
                <option value={"фантастика"}>Фантастика</option>
                <option value={"биография"}>Биография</option>
                <option value={"комедия"}>Комедия</option>
                <option value={"мелодрама"}>Мелодрама</option>
                <option value={"короткометражка"}>Короткометражка</option>
                <option value={"детектив"}>Детектив</option>
                <option value={"ужасы"}>Ужасы</option>
                <option value={"триллер"}>Триллер</option>
              </select>
            </label>

            <label className="category-header-filters__filter">
              Год
              <select name="year" value={year} onChange={handleSwitchYear}>
                <option value={"1860-2023"}>Все</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2010-2019">2010-2019</option>
                <option value="2000-2009">2000-2009</option>
                <option value="1990-1999">1990-1999</option>
                <option value="1980-1989">1980-1989</option>
                <option value="1970-1979">1970-1979</option>
                <option value="1960-1969">1960-1969</option>
                <option value="1950-1959">1950-1959</option>
                <option value="1940-1949">1940-1949</option>
                <option value="1930-1939">1930-1939</option>
                <option value="1920-1929">1920-1929</option>
                <option value="1910-1919">1970-1919</option>
                <option value="1860-1909">1860-1909</option>
              </select>
            </label>

            <label className="category-header-filters__filter">
              Записей на странице
              <select
                name="movies-per-page"
                value={limit}
                onChange={handleSwitchLimit}
              >
                <option value={16}>16</option>
                <option value={24}>24</option>
                <option value={32}>32</option>
              </select>
            </label>

            <label className="category-header-filters__filter">
              Тип
              <select
                name="movies-type"
                value={movieType}
                onChange={handleSwitchMovieType}
              >
                <option value="">Все</option>
                <option value="movie">Фильмы</option>
                <option value="tv-series">Сериалы</option>
                <option value="animated-series">Мульт-Сериалы</option>
                <option value="cartoon">Мультфильмы</option>
                <option value="anime">Аниме</option>
              </select>
            </label>
          </div>
        </header>
        <MoviesGrid />
        <Pagination />
      </div>
    </section>
  );
};
