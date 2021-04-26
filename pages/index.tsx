import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { SpaceBackground, PortalLoader } from "components";

const IndexPage = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("login");
    }, 400);
  }, []);

  return (
    <SpaceBackground>
      <LoadingContainer>
        <PortalLoader />
      </LoadingContainer>
    </SpaceBackground>
  );
};

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default IndexPage;
