import { HomeActionType, SET_MAIN_STATUS, SET_LOADING_STATUS } from "./types";

export const setMainStatus = (data: []): HomeActionType => ({
  type: SET_MAIN_STATUS,
  payload: data,
});

export const setLoadingStatus = () => ({
  type: SET_LOADING_STATUS,
});
