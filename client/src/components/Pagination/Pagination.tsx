import { useDispatch, useSelector } from "react-redux";
import "./Pagination.scss";
import { IStoreState } from "../../types";
import {
  setCurrentPage,
  setLimitMovies,
} from "../../redux/action-creators/movies-action_creators";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import { useEffect, useState } from "react";

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: IStoreState) => state.movies.currentPage
  );
  const countOfPages: number = useSelector(
    (state: IStoreState) => state.movies.countOfPages
  );
  const pages: number[] = [];
  for (let i = 1; i <= countOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    dispatch(setLimitMovies(16));
    dispatch(setCurrentPage(1));
  }, []);

  const pageNumberLimit = 6;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);

  const handleSetCurrentPage = (currentPage: number) => {
    dispatch(setCurrentPage(currentPage));
    if (currentPage === 1) {
      setMinPageNumberLimit(1);
      setMaxPageNumberLimit(pageNumberLimit);
    } else if (currentPage === countOfPages) {
      setMinPageNumberLimit(countOfPages - pageNumberLimit);
      setMaxPageNumberLimit(countOfPages);
    }
  };
  const handleSwitchNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handleSwitchPrevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleSwitchMaxPageNumber = () => {
    setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  };
  const handleSwitchMinPageNumber = () => {
    setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  };

  const PageIncrementBtn = () => {
    return countOfPages > maxPageNumberLimit ? (
      <button className="pagination__el" onClick={handleSwitchMaxPageNumber}>
        ...
      </button>
    ) : null;
  };

  const PageDecrementBtn = () => {
    return minPageNumberLimit > 1 ? (
      <button className="pagination__el" onClick={handleSwitchMinPageNumber}>
        ...
      </button>
    ) : null;
  };

  return (
    <div className="pagination">
      <button
        className="pagination__el"
        type="button"
        disabled={currentPage === 1}
        onClick={handleSwitchPrevPage}
      >
        <LeftArrowIcon fill="#ccff00" />
      </button>

      <div className="pagination-container">
        {minPageNumberLimit > 1 && minPageNumberLimit !== 1 ? (
          <button
            className={
              currentPage === 1 ? "pagination__el active" : "pagination__el"
            }
            type="button"
            onClick={() => handleSetCurrentPage(1)}
          >
            1
          </button>
        ) : null}
        <PageDecrementBtn />
        {pages.map((el: number) =>
          el <= maxPageNumberLimit && el >= minPageNumberLimit ? (
            <button
              key={el}
              className={
                currentPage === el ? "pagination__el active" : "pagination__el"
              }
              type="button"
              onClick={() => handleSetCurrentPage(el)}
            >
              {el}
            </button>
          ) : null
        )}
        <PageIncrementBtn />
        {maxPageNumberLimit !== countOfPages &&
        maxPageNumberLimit < countOfPages ? (
          <button
            className={
              currentPage === countOfPages
                ? "pagination__el active"
                : "pagination__el"
            }
            type="button"
            onClick={() => handleSetCurrentPage(countOfPages)}
          >
            {countOfPages}
          </button>
        ) : null}
      </div>

      <button
        className="pagination__el"
        type="button"
        disabled={currentPage === countOfPages}
        onClick={handleSwitchNextPage}
      >
        <RightArrowIcon fill="#ccff00" />
      </button>
    </div>
  );
};
