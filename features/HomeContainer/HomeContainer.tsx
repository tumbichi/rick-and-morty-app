import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SpaceBackground, PortalLoader, Header } from "components";
import { HomeStatus } from "./models";
import { MainView, Welcome } from "./components";
import { setLoadingStatus, setMainStatus } from "./actions";
import { getAllCharacters } from "./services";

const WELCOME_TEXT = "¡Bienvenido Rick Sanchez del Universo C-137!";

export const HomeContainer = () => {
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
        return (
          <>
            <Header />
            <MainView data={data} />
          </>
        );
      }
      case HomeStatus.LOADING: {
        return (
          <LoadingContainer>
            <PortalLoader />
          </LoadingContainer>
        );
      }
      default: {
        return <> Nothing </>;
      }
    }
  };

  React.useEffect(() => {
    const time = WELCOME_TEXT.length * 100 + 300;
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

  return (
    <SpaceBackground>
      <Container>{renderByStatus()}</Container>
    </SpaceBackground>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  box-sizing: border-box;
  gap: 15px;
  transition: 0.5s;
`;

/* const Container = styled.div`
  height: 100%;
  width: 100%;
`; */

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
