import {
  TOGGLE_IS_LOADING,
  TOGGLE_IS_LOADING_RANDOM,
} from "../action-types/ui-action_types";

export const toggleIsLoading = (isLoading: boolean) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const toggleIsLoadingRandom = (isLoadingRandom: boolean) => ({
  type: TOGGLE_IS_LOADING_RANDOM,
  isLoadingRandom,
});
