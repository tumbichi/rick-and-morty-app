export const SET_MAIN_STATUS = "SET_MAIN_STATUS";
export const SET_LOADING_STATUS = "SET_LOADING_STATUS";

type SetMainStatus = {
  type: typeof SET_MAIN_STATUS;
  payload: any[];
};

type SetLoadingStatus = {
  type: typeof SET_LOADING_STATUS;
};

export type HomeActionType = SetMainStatus | SetLoadingStatus;
