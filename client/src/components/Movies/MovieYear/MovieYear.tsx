import { DateIcon } from "../../icons";
import "./MovieYear.scss";

export const MovieYear = ({ year }: { year: number }) => {
  return (
    <div className="movie-year">
      <DateIcon />
      <span>{year}</span>
    </div>
  );
};
