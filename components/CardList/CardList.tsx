import React from "react";
import styled from "styled-components";
import { Card, Container as CardContainer } from "../Card";

type CardListProps = {
  data: [];
};

export const CardList = ({ data = [] }: CardListProps) => {
  return (
    <Container>
      <CardWrapper id="cards">
        {data.map((value, index) => (
          <Card index={index} item={value} />
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  box-sizing: inherit;
  gap: 1px;
  @media (max-width: 1080px) {
    justify-content: center;
    ${CardContainer} {
      max-width: auto;
      max-height: auto;
      min-height: auto;
      min-width: auto;
    }
  }
`;
