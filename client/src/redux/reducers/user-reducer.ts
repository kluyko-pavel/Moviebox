import { IMovieInfo, IUserState } from "../../types";
import { TOGGLE_IS_FAVORITE } from "../action-types/user-action_types";

const initialState = {
  favorites: [] as IMovieInfo[],
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
    default: {
      return state;
    }
  }
};

export default userReducer;
