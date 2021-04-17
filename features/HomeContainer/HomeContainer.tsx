import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SpaceBackground } from "../../components/SpaceBackground";
import { HomeStatus } from "./models";
import { MainView, Welcome } from "./components";
import { setLoadingStatus, setMainStatus } from "./actions";
import { getAllCharacters } from "./services";

const WELCOME_TEXT = "¡Bienvenido Rick Sanchez del Universo C-137!";

export const HomeContainer = () => {
  const [spaceHeight, setSpaceHeight] = React.useState(1080);

  const dispatch = useDispatch();
  const { data, status }: { data: []; status: HomeStatus } = useSelector(
    ({
      home,
    }: any): {
      status: HomeStatus;
      data: [];
    } => {
      return {
        status: home.status,
        data: home.data,
      };
    }
  );

  const renderByStatus = () => {
    switch (status) {
      case HomeStatus.WELCOME: {
        return <Welcome text={WELCOME_TEXT} />;
      }
      case HomeStatus.MAIN: {
        return <MainView data={data} />;
      }
      case HomeStatus.LOADING: {
        return <MainView loading />;
      }
      default: {
        return <> Nothing </>;
      }
    }
  };

  React.useEffect(() => {
    const time = WELCOME_TEXT.length * 100 + 300;
    console.log({ time });
    setTimeout(() => {
      dispatch(setLoadingStatus());

      getAllCharacters().then((data) => {
        setTimeout(() => {
          dispatch(
            setMainStatus(
              data.results
                .filter((item: any) => !item.name.includes("Rick"))
                .filter((item: any) => !item.name.includes("Albert Einstein"))
            )
          );
        }, 3000);
      });
    }, time);
  }, []);

  /*   React.useEffect(() => {
    if (status === HomeStatus.LOADING)
      setTimeout(() => {
        dispatch(setMainStatus([]));
      }, 400);
  }, [status]); */

  React.useEffect(() => {
    if (status === HomeStatus.MAIN) {
      console.log("WINDOW_SCREEN", window.screen);
      const cards = document.getElementById("cards");
      console.log("CARDS", { cards, height: cards.clientHeight });
      setSpaceHeight((data.length / 18) * 1050);
    }
  }, [data]);

  return (
    <SpaceBackground>
      <>
        <Container>{renderByStatus()}</Container>;
      </>
    </SpaceBackground>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
