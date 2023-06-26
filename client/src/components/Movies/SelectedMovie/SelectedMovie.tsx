import { useDispatch, useSelector } from "react-redux";
import {
  IFact,
  IGenre,
  IPerson,
  IReview,
  ISimilarMovie,
  IStoreState,
  ITrailer,
  IWatchability,
} from "../../../types";
import {
  LeftArrowIcon,
  ListArrowIcon,
  LogoIcon,
  RateStarIcon,
} from "../../icons";
import "./SelectedMovie.scss";
import { MovieType } from "../MovieType/MovieType";
import { MovieDuration } from "../MovieDuration/MovieDuration";
import { MovieYear } from "../MovieYear/MovieYear";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { Person } from "../../Person";
import { Review } from "../../Review";
import {
  loadReviews,
  loadSelectedMovie,
} from "../../../redux/action-creators/movies-action_creators";
import { SelectedMovieSkeleton } from "./SelectedMovieSkeleton";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { toggleIsFavorite } from "../../../redux/action-creators/user-action_creators";

export const SelectedMovie = () => {
  const isAuth = useSelector((state: IStoreState) => state.user.isAuth);
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);
  const [selectedHeader, setSelectedHeader] = useState("main");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMovie = useSelector(
    (state: IStoreState) => state.movies.selectedMovie
  );
  const favorites = useSelector((state: IStoreState) => state.user.favorites);
  const isFavorite = favorites.find((el) => el.id === selectedMovie.id);

  const { movieId = "" } = useParams();
  const reviews = useSelector((state: IStoreState) => state.movies.reviews);

  useEffect(() => {
    dispatch(loadSelectedMovie(movieId));
    dispatch(loadReviews(movieId));
  }, []);

  if (JSON.stringify(selectedMovie) === "{}") {
    return null;
  }

  const trailerIds: string[] = [];
  const trailerOpts = {
    height: "290",
    width: "520",
  };
  const handleOnReadyTrailer = (e: any) => {
    e.target.pauseVideo();
  };

  const handleGenerateTrailer = (trailer: ITrailer) => {
    const trailerId = trailer.url.slice(-11);
    if (trailerIds.includes(trailerId)) {
      return null;
    } else {
      trailerIds.push(trailerId);
      return (
        <YouTube
          key={trailer.url.slice(-11)}
          videoId={trailer.url.slice(-11)}
          opts={trailerOpts}
          onReady={handleOnReadyTrailer}
        />
      );
    }
  };

  const handleAddToFavorites = () => {
    isAuth ? dispatch(toggleIsFavorite(selectedMovie)) : navigate("/sign-in");
  };

  return isLoading ? (
    <SelectedMovieSkeleton />
  ) : (
    <div className="selected-movie-wrapper">
      <div
        className="selected-movie-background"
        style={{
          backgroundImage: `url(${
            selectedMovie.backdrop?.url || selectedMovie.poster?.url
          })`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="selected-movie-background__gradient"></div>
      </div>
      <div className="container">
        <div className="selected-movie-container">
          <nav className="selected-movie-nav" onClick={() => navigate(-1)}>
            <LeftArrowIcon fill="#fff" />
            <span className="selected-movie-nav__text">Назад</span>
          </nav>
          <div className="selected-movie-content">
            {selectedMovie.poster?.previewUrl ? (
              <img
                src={selectedMovie.poster?.previewUrl}
                alt="movie poster"
                className="selected-movie-content__poster"
              />
            ) : (
              <div className="selected-movie-content__empty-poster">
                <LogoIcon fill="grey" />
              </div>
            )}

            <div className="selected-movie-about">
              <header className="selected-movie-header">
                <h2
                  className="selected-movie-header__title"
                  onClick={() => setSelectedHeader("main")}
                >
                  {selectedMovie.name}
                </h2>

                {JSON.stringify(selectedMovie.videos?.trailers) !== "[]" &&
                  selectedMovie.videos?.trailers && (
                    <span
                      className="selected-movie-header__trailers"
                      onClick={() => setSelectedHeader("trailers")}
                    >
                      Трейлеры
                      <ListArrowIcon />
                    </span>
                  )}

                {JSON.stringify(selectedMovie.persons) !== "[]" &&
                  selectedMovie.persons && (
                    <span
                      className="selected-movie-header__persons"
                      onClick={() => setSelectedHeader("persons")}
                    >
                      Ключевые лица <ListArrowIcon />
                    </span>
                  )}

                {JSON.stringify(selectedMovie.watchability?.items) !== "[]" &&
                  selectedMovie.watchability?.items && (
                    <span
                      className="selected-movie-header__watchability"
                      onClick={() => setSelectedHeader("watchability")}
                    >
                      Где посмотреть <ListArrowIcon />
                    </span>
                  )}

                {JSON.stringify(reviews) !== "[]" && reviews && (
                  <span
                    className="selected-movie-header__reviews"
                    onClick={() => setSelectedHeader("reviews")}
                  >
                    Отзывы
                    <ListArrowIcon />
                  </span>
                )}
              </header>

              {selectedHeader === "main" ? (
                <div className="selected-movie-info">
                  <div className="selected-movie-info__additional">
                    <MovieType movieType={selectedMovie.type} />
                    <span className="selected-movie-info__additional-genres">
                      {selectedMovie.genres.map((genre: IGenre) =>
                        selectedMovie.genres.indexOf(genre) ===
                        selectedMovie.genres.length - 1
                          ? `${genre.name}`
                          : `${genre.name}, `
                      )}
                    </span>
                    {selectedMovie.movieLength && (
                      <div className="selected-movie-info__additional-duration">
                        <MovieDuration duration={selectedMovie.movieLength} />
                        {selectedMovie.movieLength >= 60 &&
                          `/ ${Math.floor(selectedMovie.movieLength / 60)}ч ${
                            selectedMovie.movieLength % 60
                          }мин`}
                      </div>
                    )}
                    <MovieYear year={selectedMovie.year} />
                  </div>
                  <div className="selected-movie-info__adds">
                    {(selectedMovie.ageRating ||
                      selectedMovie.ageRating === 0) && (
                      <div className="selected-movie-info__add">
                        <h5 className="selected-movie-info__add-key">
                          Возраст:
                        </h5>
                        <span className="selected-movie-info__add-value">
                          {selectedMovie.ageRating}+
                        </span>
                      </div>
                    )}
                    <div className="selected-movie-info__add">
                      <h5 className="selected-movie-info__add-key">
                        {selectedMovie.countries.length === 1
                          ? "Страна:"
                          : "Страны:"}
                      </h5>
                      <span className="selected-movie-info__add-value">
                        {selectedMovie.countries.map((country: IGenre) =>
                          selectedMovie.countries.indexOf(country) ===
                          selectedMovie.countries.length - 1
                            ? `${country.name}`
                            : `${country.name},`
                        )}
                      </span>
                    </div>
                    <div className="selected-movie-info__add">
                      <h5 className="selected-movie-info__add-key">Рейтинг:</h5>
                      <div className="selected-movie-info__add-value">
                        <RateStarIcon fill="#fff" />
                        <span className="selected-movie-info__add-value-rate">
                          {selectedMovie.rating?.kp.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    {selectedMovie.fees?.world?.currency && (
                      <div className="selected-movie-info__add">
                        <h5 className="selected-movie-info__add-key">Сборы:</h5>
                        <span className="selected-movie-info__add-value">{`${selectedMovie.fees?.world?.currency}${selectedMovie.fees?.world?.value}`}</span>
                      </div>
                    )}
                  </div>
                  <button
                    className="selected-movie-info__favorites"
                    type="button"
                    onClick={handleAddToFavorites}
                  >
                    <BookmarkIcon fill="#ccff00" />
                    {isFavorite ? (
                      <span style={{ color: "#ccff00" }}>В избранном</span>
                    ) : (
                      <span>В избранное</span>
                    )}
                  </button>
                  <p className="selected-movie-info__description">
                    {selectedMovie.description}
                  </p>
                  {JSON.stringify(selectedMovie.facts) !== "[]" &&
                    selectedMovie.facts && (
                      <div className="selected-movie-info__facts">
                        <span>Немного интересных фактов:</span>
                        {selectedMovie.facts.map((fact: IFact) => (
                          <p
                            key={fact.value}
                            className="selected-movie-info__fact"
                          >
                            {fact.value.replace(/<\/?[^>]+>/g, "")}
                          </p>
                        ))}
                      </div>
                    )}
                  {JSON.stringify(selectedMovie.similarMovies) !== "[]" &&
                    selectedMovie.similarMovies && (
                      <p className="selected-movie-info__similar-movies">
                        <span>Похожее: </span>
                        {selectedMovie.similarMovies.map(
                          (movie: ISimilarMovie) => (
                            <span
                              key={movie.id}
                              className="selected-movie-info__similar-movie"
                              onClick={() =>
                                (window.location.pathname = `/movie/${movie.id}`)
                              }
                            >
                              {selectedMovie.similarMovies.indexOf(movie) ===
                              selectedMovie.similarMovies.length - 1
                                ? `${movie.name}`
                                : `${movie.name}, `}
                            </span>
                          )
                        )}
                      </p>
                    )}
                </div>
              ) : selectedHeader === "trailers" ? (
                <div className="selected-movie-trailers">
                  {selectedMovie.videos?.trailers.map((trailer: ITrailer) =>
                    handleGenerateTrailer(trailer)
                  )}
                </div>
              ) : selectedHeader === "persons" ? (
                <div className="selected-movie-persons">
                  {selectedMovie.persons.map(
                    (person: IPerson) =>
                      person.name && (
                        <Person
                          key={person.id + person.enProfession}
                          {...person}
                        />
                      )
                  )}
                </div>
              ) : selectedHeader === "watchability" ? (
                <div className="selected-movie-watchability">
                  {selectedMovie.watchability?.items.map(
                    (broker: IWatchability) => (
                      <div key={broker.url} className="movie-broker">
                        <img
                          className="movie-broker__image"
                          src={broker.logo?.url}
                          alt="broker poster"
                        />
                        <div className="movie-broker-info">
                          <span className="movie-broker-info__name">
                            {broker.name}
                          </span>
                          <a
                            className="movie-broker-info__ref"
                            href={broker.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Смотреть
                          </a>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="reviews">
                  {reviews.map((review: IReview) => (
                    <Review key={review.id} {...review} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
