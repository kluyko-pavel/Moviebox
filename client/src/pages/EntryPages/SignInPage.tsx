import { useDispatch } from "react-redux";
import { Input } from "../../components";
import { useState } from "react";
import "./EntryPage.scss";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../components/icons";

export const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e: any) => {
    e.preventDefault();
    //   dispatch(signIn({ email: userEmail, password: userPassword }));
  };

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
          <form className="entry-page-form" name="login-page-form" action="#">
            <h3 className="entry-page-form__title">Авторизация</h3>
            <Input
              labelName="Логин"
              type="text"
              name="login-input"
              placeholder="Введите логин"
              required
              isActive={true}
              value={userLogin}
              callback={(e: any) => setUserLogin(e.target.value)}
            />
            <div className="entry-page-form__password">
              <Input
                labelName="Пароль"
                type={showPassword ? "text" : "password"}
                name="password-input"
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
