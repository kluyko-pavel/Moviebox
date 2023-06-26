import "./MainFooter.scss";

export const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="main-footer__inner">
          <p className="main-footer-text">
            Moviebox - это киноплатформа с огромной коллекцией новейших фильмов.
            Вы можете смотреть весь контент бесплатно. Добро пожаловать в
            Moviebox - идеальное место для любителей кино!
          </p>
          <p className="main-footer-rights">
            <span className="main-footer-rights__year">©2022 Moviebox</span>
            <span className="main-footer-rights__line"></span>
            <span className="main-footer-rights__reserved">
              Все права защищены
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
