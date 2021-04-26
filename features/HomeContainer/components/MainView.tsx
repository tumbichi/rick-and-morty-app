import React from "react";
import styled from "styled-components";
import { CardList } from "components";

export const MainView = ({ data }: any) => {
  return (
    <Content>
      <CardList data={data} />
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
`;
