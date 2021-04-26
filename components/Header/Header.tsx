import React from "react";
import styled from "styled-components";
import { InputSelect } from "components";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="loader" />

      <TopWrapper>
        <SearchText placeholder="Buscar" />
      </TopWrapper>
      <BottomWrapper>
        <InputSelect
          options={[
            { label: "Alive" },
            { label: "Dead" },
            { label: "Unknown" },
          ]}
          placeholder="Select status"
        />
        <InputSelect
          options={[
            { label: "Male" },
            { label: "Female" },
            { label: "Genderless" },
            { label: "Unknown" },
          ]}
          placeholder="Select gender"
        />
        <InputSelect
          options={[
            { label: "Human" },
            { label: "Alien" },
            { label: "Poopybutthole" },
          ]}
          placeholder="Select specie"
        />
        <InputSelect placeholder="Select origin location" />
        <InputSelect placeholder="Select current location" />
        <div className="loader" />
      </BottomWrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 130px;
  padding: 0 12px;
  background: #eeeeee22;
`;

const TopWrapper = styled.div`
  height: 100%;
  min-width: 384px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const SearchText = styled.input`
  height: 40px;
  width: 100%;
  max-width: 384px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  ::placeholder {
    color: #121212;
  }
`;