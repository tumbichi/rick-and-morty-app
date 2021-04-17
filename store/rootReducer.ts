import { combineReducers } from "redux";
import { homeReducer } from "../features/HomeContainer/reducer";

export const rootReducer = combineReducers({
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
