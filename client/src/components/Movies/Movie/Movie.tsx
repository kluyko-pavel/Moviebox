import { IMovieInfo } from "../../../types";
import { LogoIcon } from "../../icons";
import { MovieDuration } from "../MovieDuration/MovieDuration";
import { MovieRate } from "../MovieRate/MovieRate";
import { MovieType } from "../MovieType/MovieType";
import "./Movie.scss";

export const Movie = ({ movie }: { movie: IMovieInfo }) => {
  return (
    <div
      className="movie"
      onClick={() => (window.location.pathname = `/movie/${movie.id}`)}
    >
      {movie.poster?.previewUrl ? (
        <div className="movie__image ">
          <img src={movie.poster?.previewUrl} alt="movie poster" />
        </div>
      ) : (
        <div className="movie__empty-image ">
          <LogoIcon fill="grey" />
        </div>
      )}
      <div className="movie-info">
        <div className="movie-info__main">
          <h4 className="movie-info__main-title">{movie.name}</h4>
          <div className="movie-info__main-type">
            <MovieType movieType={movie.type} />
          </div>
        </div>
        <div className="movie-info__additional">
          <span className="movie-info__additional-year">{movie.year}</span>
          <div className="movie-info__additional-add">
            {movie.type === "tv-series" ||
            movie.type === "animated-series" ||
            movie.type === "anime" ? (
              <></>
            ) : (
              <MovieDuration duration={movie.movieLength} />
            )}
            <MovieRate rate={movie.rating?.kp} />
          </div>
        </div>
      </div>
    </div>
  );
};
