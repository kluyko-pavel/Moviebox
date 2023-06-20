import { RateStarIcon } from "../../icons";
import "./MovieRate.scss";

export const MovieRate = ({ rate }: { rate: string | number }) => {
  const movieRate = +rate;
  return (
    <div className="movie-rate">
      <RateStarIcon fill="#ccff00" />
      {movieRate.toFixed(1)}
    </div>
  );
};
