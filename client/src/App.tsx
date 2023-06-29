import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "./config.scss";
import { MainFooter, MainHeader, Modal } from "./components";
import {
  EmailConfirmPage,
  MainPage,
  PersonPage,
  SearchPage,
  SelectedMoviePage,
  SignUpPage,
} from "./pages";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { SignInPage } from "./pages";
import { useEffect } from "react";
import { checkAuth } from "./redux/action-creators/user-action_creators";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "./types";

function App() {
  const dispatch = useDispatch();
  const isModal = useSelector(
    (state: IStoreState) => state.ui.modalInfo.showModal
  );

  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("accessToken")) {
        dispatch(checkAuth());
      }
    }, 3000);
  }, []);
  return (
    <div className="wrapper">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
          {isModal && <Modal />}
          <MainHeader />
          <div className="main-content">
            <Routes>
              <Route path="/">
                <Route index element={<MainPage />} />
                <Route path="movie/:movieId" element={<SelectedMoviePage />} />
                <Route path="person/:personId" element={<PersonPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route path="sign-up" element={<SignUpPage />} />
                <Route path="mail-confirm" element={<EmailConfirmPage />} />
              </Route>
            </Routes>
          </div>
          <MainFooter />
        </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
