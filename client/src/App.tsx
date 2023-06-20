import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import "./config.scss";
import { MainFooter, MainHeader } from "./components";
import {
  MainPage,
  PersonPage,
  SearchPage,
  SelectedMoviePage,
  SignUpPage,
} from "./pages";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { SignInPage } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
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
