import { IReview } from "../../types";
import { transformDateTime } from "../../utils";
import "./Review.scss";

export const Review = (props: IReview) => {
  return (
    <div
      className={
        props.type === "Позитивный"
          ? "review"
          : props.type === "Негативный"
          ? "review negative"
          : "review neutral"
      }
    >
      <header className="review-info">
        <div className="review-info__create">
          <span className="review-info__create-author">{props.author}</span>
          <time className="review-info__create-date">
            {transformDateTime(props.date)}
          </time>
        </div>
        <div className="review-info__type">{props.type}</div>
      </header>
      <div className="review-main">
        <h3 className="review-main__title">{props.title}</h3>
        <p className="review-main__text">
          {props.review.replace(/<\/?[^>]+>/g, "")}
        </p>
      </div>
    </div>
  );
};
