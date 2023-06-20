import { DurationIcon } from "../../icons";
import "./MovieDuration.scss";

export const MovieDuration = ({ duration }: { duration: number }) => {
  return (
    <div className="movie-duration">
      <DurationIcon />
      <span className="movie-duration-text">{duration} мин</span>
    </div>
  );
};
