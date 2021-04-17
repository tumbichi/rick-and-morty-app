import React from "react";
import styled from "styled-components";
import { PortalLoader, InputText, CardList } from "../../../components";

export const MainView = ({ loading, data }: any) => {
  return (
    <Container>
      <Header>
        <TopH>
          <SearchText placeholder="Buscar" />
          <SelectInput placeholder="Buscar" value="">
            <option>Genero</option>
            <option>Uno</option>
            <option>Dos</option>
            <option>Tres</option>
            <option>Cuatro</option>
          </SelectInput>
          <SelectInput>
            <option>Ubicacion Actual</option>
            <option>Uno</option>
            <option>Dos</option>
            <option>Tres</option>
            <option>Cuatro</option>
          </SelectInput>
        </TopH>
      </Header>
      <Content>
        {loading && (
          <LoadingContainer>
            <PortalLoader />
          </LoadingContainer>
        )}
        <CardList data={data} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  box-sizing: border-box;
  gap: 15px;
  transition: 0.5s;
`;

const Header = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  max-width: calc(276px * 3);
`;

const TopH = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

export const SearchText = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  ::placeholder {
    color: #121212;
  }
`;

export const SelectInput = styled.select`
  padding: 10px;
  box-sizing: border-box;
  border: 0;
`;

const Content = styled.div`
  width: 100%;
`;

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
