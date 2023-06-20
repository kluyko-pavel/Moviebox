import { useNavigate } from "react-router-dom";
import { IPerson } from "../../types";
import "./Person.scss";

export const Person = (props: IPerson) => {
  const personId = props.id;
  const navigate = useNavigate();
  return (
    <div className="person" onClick={() => navigate(`/person/${personId}`)}>
      <img className="person__photo" src={props.photo} alt="person poster" />
      <div className="person-about">
        <span className="person-about__name">{props.name}</span>
        <div className="person-profession">
          <span className="person-profession__category">Категория: </span>
          <span className="person-profession__category-name">
            {props.profession}
          </span>
        </div>
      </div>
    </div>
  );
};
