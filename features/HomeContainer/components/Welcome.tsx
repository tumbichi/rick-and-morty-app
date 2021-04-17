import React from "react";
import styled from "styled-components";
import { Typewriter } from "../../../components";

export const Welcome = ({ text }) => {
  React.useEffect(() => {}, []);

  return (
    <Container>
      {/* <Title id="title">Welcome</Title> */}
      <Typewriter inputStrings={[text]} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
  box-sizing: border-box;
  text-align: center;
`;
