import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import GlobalStyles from "../global-styles";

const { store } = configureStore();

const RickDatabaseApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
};

export default RickDatabaseApp;
