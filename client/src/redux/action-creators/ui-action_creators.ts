import { IModal } from "../../types";
import {
  TOGGLE_IS_LOADING,
  TOGGLE_IS_LOADING_RANDOM,
  TOGGLE_MODAL,
} from "../action-types/ui-action_types";

export const toggleIsLoading = (isLoading: boolean) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const toggleIsLoadingRandom = (isLoadingRandom: boolean) => ({
  type: TOGGLE_IS_LOADING_RANDOM,
  isLoadingRandom,
});

export const toggleModal = (modalInfo: IModal) => ({
  type: TOGGLE_MODAL,
  modalInfo,
});
