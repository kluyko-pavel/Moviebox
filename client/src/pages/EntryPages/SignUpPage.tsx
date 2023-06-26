import { useDispatch, useSelector } from "react-redux";
import { Input, Loader } from "../../components";
import { useState } from "react";
import "./EntryPage.scss";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../components/icons";
import { signUp } from "../../redux/action-creators/user-action_creators";
import { IStoreState } from "../../types";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);

  const handleSignUp = (e: any) => {
    e.preventDefault();
    dispatch(signUp({ email: userEmail, password: userPassword }));
  };

  return isLoading ? (
    <Loader />
  ) : (
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
          <form
            className="entry-page-form"
            name="reg-page-form"
            action="#"
            onSubmit={handleSignUp}
          >
            <h3 className="entry-page-form__title">Регистрация</h3>
            <Input
              labelName="Email"
              type="email"
              name="sign-up-email-input"
              placeholder="Введите почту"
              required
              isActive={true}
              value={userEmail}
              callback={(e: any) => setUserEmail(e.target.value)}
            />
            <div className="entry-page-form__password">
              <Input
                labelName="Пароль"
                type={showPassword ? "text" : "password"}
                name="sign-up-password-input"
                placeholder="Введите пароль"
                isActive={true}
                required
                value={userPassword}
                callback={(e: any) => setUserPassword(e.target.value)}
              />
              <button
                className="entry-page-form__password-button"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon />
              </button>
            </div>
            <p className="entry-page-form__sign">
              Уже есть аккаунт?&nbsp;
              <span
                className="entry-page-form__sign-link"
                onClick={() => navigate("/sign-in")}
              >
                Войти
              </span>
            </p>
            <button className="entry-page-form__btn" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
