import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CardSkeleton.scss";

export const CardSkeleton = ({ cards }: { cards: number }) => {
  const cardsArr = Array(cards).fill(0);
  return (
    <>
      {cardsArr.map((_, i) => (
        <div key={i} className="card-skeleton">
          <Skeleton className="card-skeleton__image " />
          <div className="card-skeleton-info">
            <div className="card-skeleton-info__main">
              <Skeleton
                className="card-skeleton-info__main-title"
                width={140}
              />
              <Skeleton className="movie-info__main-type" width={100} />
            </div>
            <div className="movie-info__additional">
              <Skeleton className="movie-info__additional-year" width={100} />
              <Skeleton className="movie-info__additional-add" width={80} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
