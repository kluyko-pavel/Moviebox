import "./MovieType.scss";

export const MovieType = ({ movieType }: { movieType: string }) => {
  return (
    <span className="movie-type">
      {movieType === "movie"
        ? "Фильм"
        : movieType === "cartoon"
        ? "Мультфильм"
        : movieType === "tv-series"
        ? "Сериал"
        : movieType === "anime"
        ? "Аниме"
        : "Мульт-Сериал"}
    </span>
  );
};
