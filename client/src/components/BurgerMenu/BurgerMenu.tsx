import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IStoreState } from "../../types";
import { logOut } from "../../redux/action-creators/user-action_creators";
import { useRef, useState } from "react";
import "./BurgerMenu.scss";
import { setMovieType } from "../../redux/action-creators/movies-action_creators";
import { useClickOutside } from "../../utils";

export const BurgerMenu = () => {
  const refMenu = useRef<any>();
  const refMenuBtn = useRef<any>();
  const isAuth = useSelector((state: IStoreState) => state.user.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggleBtn, setToggleBtn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleBtn(!toggleBtn);
    setToggleMenu(!toggleMenu);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

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

  const handleClickOutside = (e: any) => {
    if (refMenuBtn.current.contains(e.target)) {
      return;
    } else {
      setToggleBtn(false);
      setToggleMenu(false);
    }
  };

  useClickOutside(refMenu, handleClickOutside);

  return (
    <>
      <button
        className={
          toggleBtn ? "burger-menu-btn close-burger" : "burger-menu-btn"
        }
        ref={refMenuBtn}
        onClick={handleToggleMenu}
      >
        <span className="burger-menu-btn__line "></span>
      </button>
      {toggleMenu && (
        <ul className="burger-menu" ref={refMenu}>
          <li className={"burger-menu__link"}>
            <a href="#" onClick={handleGoToHome}>
              ГЛАВНАЯ
            </a>
          </li>

          <li className={"burger-menu__link"}>
            <a
              href="#category-header"
              onClick={
                isAuth
                  ? () => navigate("/favorites")
                  : () => navigate("/sign-in")
              }
            >
              ИЗБРАННОЕ
            </a>
          </li>

          <li className={"burger-menu__link"}>
            <a href="#category-header" onClick={handleGoToMovies}>
              ФИЛЬМЫ
            </a>
          </li>

          <li className={"burger-menu__link"}>
            <a href="#category-header" onClick={handleGoToSeries}>
              СЕРИАЛЫ
            </a>
          </li>

          <li className={"burger-menu__link"}>
            <a href="#category-header" onClick={handleGoToCartoons}>
              МУЛЬТФИЛЬМЫ
            </a>
          </li>

          <li
            className="burger-menu__link"
            onClick={isAuth ? handleLogOut : () => navigate("/sign-in")}
          >
            <span>{!isAuth ? "ВОЙТИ" : "ВЫЙТИ"}</span>
          </li>
        </ul>
      )}
    </>
  );
};
