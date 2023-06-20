import "./SelectedMovie.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LeftArrowIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

export const SelectedMovieSkeleton = () => {
  const navigate = useNavigate();
  return (
    <div className="selected-movie-wrapper">
      <div className="container">
        <div className="selected-movie-container">
          <nav className="selected-movie-nav" onClick={() => navigate(-1)}>
            <LeftArrowIcon fill="#fff" />
            <span className="selected-movie-nav__text">Назад</span>
          </nav>
          <div className="selected-movie-content">
            <Skeleton className="selected-movie-content__poster" width={250} />

            <div className="selected-movie-about">
              <header className="selected-movie-header">
                <Skeleton
                  className="selected-movie-header__title"
                  width={350}
                />
                <Skeleton width={120} />
                <Skeleton width={120} />
                <Skeleton width={120} />
              </header>

              <div className="selected-movie-info">
                <div className="selected-movie-info__additional">
                  <Skeleton width={70} />
                  <Skeleton width={140} />
                  <Skeleton width={50} />
                  <Skeleton width={70} />
                </div>
                <Skeleton
                  className="selected-movie-info__adds"
                  width={400}
                  height={85}
                />
                <Skeleton
                  className="selected-movie-info__description"
                  count={2}
                />
                <Skeleton
                  className="selected-movie-info__description"
                  width={700}
                />
                <Skeleton
                  className="selected-movie-info__description"
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
