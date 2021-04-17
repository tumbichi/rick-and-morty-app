import { HomeStatus, HomeState } from "../models";
import {
  HomeActionType,
  SET_MAIN_STATUS,
  SET_LOADING_STATUS,
} from "../actions";



const initialState: HomeState = {
  status: HomeStatus.WELCOME,
  data: [],
};

export const homeReducer = (state: HomeState = initialState, action: HomeActionType) => {
  switch (action.type) {
    case SET_LOADING_STATUS: {
      return {
        ...state,
        status: HomeStatus.LOADING,
      };
    }
    case SET_MAIN_STATUS: {
      return {
        ...state,
        status: HomeStatus.MAIN,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
