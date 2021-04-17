import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  return { store };
};

// sagaMiddleware.run(rootSaga);
