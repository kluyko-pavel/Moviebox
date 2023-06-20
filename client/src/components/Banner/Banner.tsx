import { useDispatch, useSelector } from "react-redux";
import "./Banner.scss";
import { IRandomMovieInfo, IStoreState } from "../../types";
import { useEffect } from "react";
import { loadRandomMovie } from "../../redux/action-creators/movies-action_creators";
import { MovieRate, MovieType, MovieYear } from "../Movies";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();
  const isLoadingRandom = useSelector(
    (state: IStoreState) => state.ui.isLoadingRandom
  );
  const dispatch = useDispatch();
  const randomMovie: IRandomMovieInfo = useSelector(
    (state: IStoreState) => state.movies.randomMovie
  );
  useEffect(() => {
    if (!randomMovie.backdrop?.url) {
      dispatch(loadRandomMovie());
    }
  }, [randomMovie]);

  const imageUrl = randomMovie.backdrop?.url;
  const movieType = randomMovie.type;
  const movieRate = randomMovie.rating?.kp;
  const movieYear = randomMovie.year;
  const movieId = randomMovie.id;
  const movieName = randomMovie.name;
  return (
    <div className="banner-wrapper">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        className="banner"
      >
        <div className="banner__gradient"></div>
        {isLoadingRandom && (
          <Skeleton
            className="banner-skeleton"
            style={{ position: "absolute" }}
            height={755}
          />
        )}

        <div className="container">
          <div className="banner-content">
            <p className="banner-content__title">Moviebox</p>
            <h1 className="banner-content__slogan">
              Неограниченное <span>Количество</span> Фильмов, Сериалов & Многого
              Другого.
            </h1>
            <div className="banner-content__movie-info">
              {!isLoadingRandom ? (
                <MovieType movieType={movieType} />
              ) : (
                <Skeleton width={80} />
              )}
              {!isLoadingRandom ? (
                <MovieRate rate={movieRate} />
              ) : (
                <Skeleton width={50} />
              )}
              {!isLoadingRandom ? (
                <MovieYear year={movieYear} />
              ) : (
                <Skeleton width={70} />
              )}
              {!isLoadingRandom ? (
                <span className="banner-content__movie-info-title">
                  {movieName}
                </span>
              ) : (
                <Skeleton width={90} />
              )}
            </div>
            {!isLoadingRandom ? (
              <button
                className="banner-content__movie-info-btn"
                type="button"
                onClick={() => navigate(`/movie/${movieId}`)}
              >
                Подробнее
              </button>
            ) : (
              <Skeleton
                width={150}
                height={45}
                borderRadius={20}
                style={{ marginTop: "47px" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
