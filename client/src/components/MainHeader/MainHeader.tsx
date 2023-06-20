import { useNavigate } from "react-router-dom";
import { LogoIcon, SearchIcon } from "../icons";
import "./MainHeader.scss";
import { useDispatch } from "react-redux";
import {
  setMovieType,
  setSearch,
} from "../../redux/action-creators/movies-action_creators";
import { useState } from "react";

export const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoToHome = () => {
    navigate("/");
    dispatch(setMovieType(""));
  };
  const handleGoToMovies = () => {
    navigate("/");
    dispatch(setMovieType("movie"));
  };
  const handleGoToSeries = () => {
    navigate("/");
    dispatch(setMovieType("tv-series"));
  };
  const handleGoToCartoons = () => {
    navigate("/");
    dispatch(setMovieType("cartoon"));
  };

  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e: any) => {
    if (e.code === "Enter") {
      e.preventDefault();
      navigate("/search");
      window.scrollBy(0, 755);
      dispatch(setSearch(searchValue));
      setSearchValue("");
    }
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header__inner">
          <div className="main-header__logo" onClick={() => navigate("/")}>
            <LogoIcon fill="#ccff00" />
            <span className="main-header__logo-text">Moviebox</span>
          </div>
          <nav className="main-header-nav">
            <ul className="main-header-nav__items">
              <li className="main-header-nav__item" onClick={handleGoToHome}>
                <a href="#">ГЛАВНАЯ</a>
              </li>
              <span className="main-header__vertical-line"></span>
              <li
                className="main-header-nav__item"
                onClick={() => navigate("/favorites")}
              >
                <a href="#category-header">ИЗБРАННОЕ</a>
              </li>
              <span className="main-header__vertical-line"></span>
              <li className="main-header-nav__item" onClick={handleGoToMovies}>
                <a href="#category-header">ФИЛЬМЫ</a>
              </li>
              <span className="main-header__vertical-line"></span>
              <li className="main-header-nav__item " onClick={handleGoToSeries}>
                <a href="#category-header">СЕРИАЛЫ</a>
              </li>
              <span className="main-header__vertical-line"></span>
              <li
                className="main-header-nav__item"
                onClick={handleGoToCartoons}
              >
                <a href="#category-header">МУЛЬТФИЛЬМЫ</a>
              </li>
            </ul>
          </nav>
          <div className="main-header-tools">
            <form
              className="main-header-tools__search-form"
              action="#"
              name="main-header-search-form"
              onKeyDown={handleSubmit}
            >
              <SearchIcon fill="#CCFF00" />
              <input
                className="main-header-tools__search-input"
                name="main-header-search-input"
                type="text"
                placeholder="поиск..."
                value={searchValue}
                onChange={(e: any) => setSearchValue(e.target.value)}
              />
            </form>
            <div className="main-header-tools__username">
              <button className="main-header-tools__sign-in-btn">ВОЙТИ</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
