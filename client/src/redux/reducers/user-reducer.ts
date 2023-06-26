import { IMovieInfo, IUserInfo, IUserState } from "../../types";
import {
  SET_AUTH,
  SET_USER,
  TOGGLE_IS_FAVORITE,
} from "../action-types/user-action_types";

const initialState = {
  favorites: [] as IMovieInfo[],
  user: {} as IUserInfo,
  isAuth: false,
};

const getInitialState = () => {
  const localState = localStorage.getItem("localState");
  if (localState) {
    const parsed = JSON.parse(localState);
    const { user } = parsed;
    return user;
  }
  return initialState;
};

const userReducer = (state: IUserState = getInitialState(), action: any) => {
  switch (action.type) {
    case TOGGLE_IS_FAVORITE: {
      const { movie } = action;
      const index = state.favorites.findIndex((el) => el.id === movie.id);
      const newFavorites = [...state.favorites] || [];
      if (index === -1) {
        newFavorites.push(movie);
      } else {
        newFavorites.splice(index, 1);
      }
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case SET_USER: {
      const { user } = action;
      return {
        ...state,
        user,
      };
    }
    case SET_AUTH: {
      const { isAuth } = action;
      return {
        ...state,
        isAuth,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
