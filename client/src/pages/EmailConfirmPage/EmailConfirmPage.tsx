import "../EntryPages/EntryPage.scss";
import { useSelector } from "react-redux";
import { IStoreState } from "../../types";

export const EmailConfirmPage = () => {
  const user = useSelector((state: IStoreState) => state.user.user);
  return (
    <section className="entry-page">
      <div
        className="entry-page__background"
        style={{
          backgroundImage: `url('./auth.png')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="container">
        <div className="entry-page-container">
          <h3 className="entry-page-confirm-title">
            На адрес <span>{user.email}</span> отправлено письмо с
            подтверждением регистрации
          </h3>
        </div>
      </div>
    </section>
  );
};
