import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./PersonPage.scss";

export const PersonPageSkeleton = () => {
  return (
    <div className="full-person-wrapper">
      <div className="container">
        <div className="full-person">
          <div className="full-person-about">
            <Skeleton width={250} className="full-person-about__photo" />
            <Skeleton width={125} className="full-person-about__name" />
            <Skeleton width={100} className="full-person-about__ename" />
          </div>
          <div className="full-person-content">
            <Skeleton width={150} className="full-person-content__title" />
            <div className="full-person-info">
              <Skeleton width={250} className="full-person-info__lot" />
              <Skeleton width={350} className="full-person-info__lot" />
              <Skeleton width={150} className="full-person-info__lot" />
              <Skeleton width={270} className="full-person-info__lot" />
              <Skeleton width={100} className="full-person-info__lot" />
              <Skeleton width={160} className="full-person-info__lot" />
              <Skeleton width={700} className="full-person-info__lot" />
              <Skeleton
                width={500}
                count={4}
                style={{ marginLeft: "200px" }}
                className="full-person-info__lot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
