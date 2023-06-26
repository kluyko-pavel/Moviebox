import { useDispatch, useSelector } from "react-redux";
import { Input, Loader } from "../../components";
import { useState } from "react";
import "./EntryPage.scss";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../components/icons";
import { signIn } from "../../redux/action-creators/user-action_creators";
import { IStoreState } from "../../types";

export const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = useSelector((state: IStoreState) => state.ui.isLoading);

  const handleSignIn = (e: any) => {
    e.preventDefault();
    dispatch(signIn({ email: userEmail, password: userPassword }));
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
            name="login-page-form"
            action="#"
            onSubmit={handleSignIn}
          >
            <h3 className="entry-page-form__title">Авторизация</h3>
            <Input
              labelName="Email"
              type="text"
              name="sign-in-email-input"
              placeholder="Введите email"
              required
              isActive={true}
              value={userEmail}
              callback={(e: any) => setUserEmail(e.target.value)}
            />
            <div className="entry-page-form__password">
              <Input
                labelName="Пароль"
                type={showPassword ? "text" : "password"}
                name="sign-in-password-input"
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
              Нет аккаунта?&nbsp;
              <span
                className="entry-page-form__sign-link"
                onClick={() => navigate("/sign-up")}
              >
                Зарегистрироваться
              </span>
            </p>
            <button className="entry-page-form__btn" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
