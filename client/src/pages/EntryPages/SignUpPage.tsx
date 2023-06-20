import { useDispatch } from "react-redux";
import { Input } from "../../components";
import { useState } from "react";
import "./EntryPage.scss";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../../components/icons";

export const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <form className="entry-page-form" name="reg-page-form" action="#">
            <h3 className="entry-page-form__title">Регистрация</h3>
            <Input
              labelName="Email"
              type="email"
              name="email-input"
              placeholder="Введите почту"
              required
              isActive={true}
              value={userEmail}
              callback={(e: any) => setUserEmail(e.target.value)}
            />
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
            <div className="entry-page-form__password">
              <Input
                labelName="Подтверждение пароля"
                type={showConfirmPassword ? "text" : "password"}
                name="password-confirm-input"
                placeholder="Повторите пароль"
                isActive={true}
                required
                value={userConfirmPassword}
                callback={(e: any) => setUserConfirmPassword(e.target.value)}
              />
              <button
                className="entry-page-form__password-button"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
