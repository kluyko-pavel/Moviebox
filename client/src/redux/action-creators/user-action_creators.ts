import { IMovieInfo } from "../../types";
import { TOGGLE_IS_FAVORITE } from "../action-types/user-action_types";

export const toggleIsFavorite = (movie: IMovieInfo) => ({
  type: TOGGLE_IS_FAVORITE,
  movie,
});
