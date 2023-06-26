import { IUiState } from "../../types";
import {
  TOGGLE_IS_LOADING,
  TOGGLE_IS_LOADING_RANDOM,
  TOGGLE_MODAL,
} from "../action-types/ui-action_types";

const initialState = {
  isLoading: false,
  isLoadingRandom: false,
  modalInfo: {
    text: "",
    showModal: false,
  },
};

const uiReducer = (state: IUiState = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_IS_LOADING: {
      const { isLoading } = action;
      return {
        ...state,
        isLoading,
      };
    }
    case TOGGLE_MODAL: {
      const { modalInfo } = action;
      return {
        ...state,
        modalInfo,
      };
    }
    case TOGGLE_IS_LOADING_RANDOM: {
      const { isLoadingRandom } = action;
      return {
        ...state,
        isLoadingRandom,
      };
    }
    default: {
      return state;
    }
  }
};

export default uiReducer;
