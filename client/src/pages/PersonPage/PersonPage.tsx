import { useNavigate, useParams } from "react-router-dom";
import "./PersonPage.scss";
import { loadPerson } from "../../redux/action-creators/movies-action_creators";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPersonMovie, IStoreState } from "../../types";
import { LogoIcon } from "../../components/icons";
import { transformDate } from "../../utils";
import { PersonPageSkeleton } from "./PersonPageSkeleton";

export const PersonPage = () => {
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);
  const { personId = "" } = useParams();
  const person = useSelector((state: IStoreState) => state.movies.person);
  const personMovieIds: number[] = [];

  const handleGetPersonMovies = (movie: IPersonMovie) => {
    if (personMovieIds.includes(movie.id)) {
      return null;
    }
    personMovieIds.push(movie.id);
    return (
      movie.name && (
        <span key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
          {person.movies.indexOf(movie) === person.movies.length - 1
            ? `${movie.name}`
            : `${movie.name}, `}
        </span>
      )
    );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPerson(personId));
  }, []);

  return isLoading ? (
    <PersonPageSkeleton />
  ) : (
    <section className="full-person-wrapper">
      <div
        className="full-person-background"
        style={{
          backgroundImage: `url(${person.photo})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="full-person-background__gradient"></div>
      </div>
      <div className="container">
        <div className="full-person">
          <div className="full-person-about">
            {person.photo ? (
              <img
                className="full-person-about__photo"
                src={person.photo}
                alt="person poster"
              />
            ) : (
              <div className="full-person-about__photo-empty">
                <LogoIcon fill="grey" />
              </div>
            )}
            <h2 className="full-person-about__name">{person.name}</h2>
            <h3 className="full-person-about__ename">{person.enName}</h3>
          </div>
          <div className="full-person-content">
            <h3 className="full-person-content__title">О персоне</h3>
            <div className="full-person-info">
              {person.profession &&
                JSON.stringify(person.profession) !== "[]" && (
                  <div className="full-person-info__lot">
                    <span className="full-person-info__lot-title">
                      Карьера:
                    </span>
                    <span className="full-person-info__lot-value">
                      {person.profession.map((profession: { value: string }) =>
                        person.profession.indexOf(profession) ===
                        person.profession.length - 1
                          ? `${profession.value}`
                          : `${profession.value}, `
                      )}
                    </span>
                  </div>
                )}

              {person.birthPlace &&
                JSON.stringify(person.birthPlace) !== "[]" && (
                  <div className="full-person-info__lot">
                    <span className="full-person-info__lot-title">
                      Место рождения:
                    </span>
                    <span className="full-person-info__lot-value">
                      {person.birthPlace.map((place: { value: string }) =>
                        person.birthPlace.indexOf(place) ===
                        person.birthPlace.length - 1
                          ? `${place.value}`
                          : `${place.value}, `
                      )}
                    </span>
                  </div>
                )}

              {person.deathPlace &&
                JSON.stringify(person.deathPlace) !== "[]" && (
                  <div className="full-person-info__lot">
                    <span className="full-person-info__lot-title">
                      Место смерти:
                    </span>
                    <span className="full-person-info__lot-value">
                      {person.deathPlace.map((place: { value: string }) =>
                        person.deathPlace.indexOf(place) ===
                        person.deathPlace.length - 1
                          ? `${place.value}`
                          : `${place.value}, `
                      )}
                    </span>
                  </div>
                )}

              {person.age && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">Возраст:</span>
                  <span className="full-person-info__lot-value">
                    {person.age}
                  </span>
                </div>
              )}

              {person.birthday && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">
                    Дата рождения:
                  </span>
                  <time className="full-person-info__lot-value">
                    {transformDate(person.birthday)}
                  </time>
                </div>
              )}

              {person.death && (
                <div className="full-person-info__lot">
                  <span className="full-person-content__info-lot-title">
                    Дата смерти:
                  </span>
                  <time className="full-person-info__lot-value">
                    {transformDate(person.death)}
                  </time>
                </div>
              )}

              {person.countAwards && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">Награды:</span>
                  <span className="full-person-info__lot-value">
                    {person.countAwards}
                  </span>
                </div>
              )}

              {person.growth && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">Рост:</span>
                  <span className="full-person-info__lot-value">
                    {person.growth}
                  </span>
                </div>
              )}

              {person.sex && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">Пол:</span>
                  <div className="full-person-info__lot-value">
                    {person.sex}
                  </div>
                </div>
              )}

              {person.facts && JSON.stringify(person.facts) !== "[]" && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">Факты:</span>
                  <span className="full-person-info__lot-value">
                    {person.facts.map((fact: { value: string }) =>
                      fact.value.replace(/<\/?[^>]+>/g, "")
                    )}
                  </span>
                </div>
              )}

              {person.movies && JSON.stringify(person.movies) !== "[]" && (
                <div className="full-person-info__lot">
                  <span className="full-person-info__lot-title">
                    Фильмография:
                  </span>
                  <span className="full-person-info__lot-value">
                    {person.movies.map((movie: IPersonMovie) =>
                      handleGetPersonMovies(movie)
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
