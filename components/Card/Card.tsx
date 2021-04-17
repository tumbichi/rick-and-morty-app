import React from "react";
import styled from "styled-components";

type CardProps = {
  index: number;
  item: any;
};

export const Card = ({ item }: CardProps) => {
  // console.log({ item });

  const renderGenderText = () => {
    let genderIcon = "";

    switch (item.gender) {
      case "Male": {
        genderIcon = "♂";
        break;
      }
      //  item.gender === "Male" ?  : ;
      case "Female": {
        genderIcon = "♀";
        break;
      }
      case "unknown": {
        // genderIcon = "⚧";
        genderIcon = `? `;
        break;
      }
    }

    return (
      <GenderText>
        <GenderChar gender={item.gender}>{genderIcon}</GenderChar>
        {item.gender}
      </GenderText>
    );
  };

  const renderStatus = () => {
    let colorStatus = "red";

    switch (item.status) {
      case "Alive": {
        colorStatus = "#55cc44";
        break;
      }
      case "Dead": {
        colorStatus = "#d63d2e";
        break;
      }
      case "unknown": {
        colorStatus = "#9e9e9e";
        break;
      }
    }

    return (
      <StatusWrapper>
        <Point color={colorStatus} />
        <StatusText>{item.status}</StatusText>
      </StatusWrapper>
    );
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <Content>
        <Title>{item.name}</Title>
        <TopContent>
          {renderStatus()}
          <SpecieText species={item.species}>{item.species}</SpecieText>
          {renderGenderText()}
        </TopContent>
        <BottomContent>
          <TextContainer>
            <LabelText>Lugar de nacimiento: </LabelText>
            <ValueText>{item.origin.name}</ValueText>
          </TextContainer>
          <TextContainer>
            <LabelText>Lugar actual: </LabelText>
            <ValueText>{item.location.name}</ValueText>
          </TextContainer>
        </BottomContent>
      </Content>
    </Container>
  );
};

export const Container = styled.article`
  width: 344px;
  height: 125px;
  border-radius: 4px;
  background-color: #3c3e44;
  color: white;
  display: flex;
  overflow: hidden;
  margin: 0.25rem;
  align-self: center;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: block;
  flex: 2 1 0%;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  box-sizing: inherit;
`;

const Image = styled.img`
  width: 100%;
  box-sizing: inherit;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Content = styled.div`
  flex: 3 1 0%;
  width: 100%;
  padding: 4px 6px;
`;

const Title = styled.h1`
  font-weight: 800;
  margin: 2px 0;
  padding-left: 6px;

  :hover {
    color: rgba(104, 164, 58, 0.8);
    cursor: pointer;
  }
`;

const Point = styled.span<{ color?: string }>`
  height: 4px;
  width: 4px;
  background: ${({ color }) => color};
  border-radius: 100%;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const StatusText = styled.p`
  font-size: 10px;
  font-weight: 600;
`;

const TextContainer = styled.div`
  margin: 2px 0px;
`;

const LabelText = styled.p`
  font-size: 8px;
  margin: 0 0 3px;
`;

const ValueText = styled.p`
  font-size: 10px;
  margin: 0 0 4px;
  font-weight: 500;

  :hover {
    color: rgba(104, 164, 58, 0.8);
    cursor: pointer;
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: flex-start;
  padding: 0 10px;
  justify-content: center;
`;

const SpecieText = styled.h3<{ species: string }>`
  font-size: 10px;
  font-weight: 500;
  background-color: ${({ species }) => {
    switch (species) {
      case "Human": {
        return "#38B0DE";
      }
      case "Alien": {
        return "#3cd070";
      }
      default: {
        return "red";
      }
    }
  }};
  width: fit-content;
  margin: 4px 0;
  padding: 2px 6px;
  border-radius: 4px;
`;

const GenderText = styled.span<{}>`
  font-size: 10px;
  font-weight: 500;
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
`;

const GenderChar = styled.span<{ gender: string }>`
  ${({ gender }) =>
    gender === "unknown"
      ? `font-size: 12px; margin-right: 2px;`
      : `font-size: 20px; margin-bottom: 2px;`};
`;
