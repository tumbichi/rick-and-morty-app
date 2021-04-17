import React from "react";

import { useRouter } from "next/router";
import styled from "styled-components";
import {
  SpaceBackground,
  InputText,
} from "../components";

const LoginPage = ({}) => {
  const router = useRouter();
  React.useEffect(() => {}, []);

  const handleLogin = (e: HTMLFormElement | any) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <SpaceBackground>
      <PageContainer>
        <Form onSubmit={handleLogin}>
          <InputText placeholder="Usuario" />
          <InputText placeholder="Contraseña" />
          <BottomForm>
            <AnimationWrapper>
              <Button className="svg-wrapper">
                <svg height="35" width="220" xmlns="http://www.w3.org/2000/svg">
                  <rect className="shape" height="35" width="220" />
                </svg>
                <p className="text">Iniciar sesion</p>
              </Button>
            </AnimationWrapper>
          </BottomForm>
        </Form>
      </PageContainer>
    </SpaceBackground>
  );
};

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Form = styled.form`
  display: flex;
  min-height: 11rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 40px 30px 20px;
`;

const BottomForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AnimationWrapper = styled.div`
  .svg-wrapper {
    height: 35px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 220px;
  }

  .shape {
    fill: transparent;
    stroke-dasharray: 140 540;
    stroke-dashoffset: -474;
    stroke-width: 4px;
    stroke: rgba(104, 164, 58, 0.8);
  }

  .text {
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    position: absolute;
    top: 0;
    padding-left: 20px;
    cursor: pointer;
  }

  @keyframes draw {
    0% {
      stroke-dasharray: 140 540;
      stroke-dashoffset: -474;
      stroke-width: 8px;
    }
    100% {
      stroke-dasharray: 735;
      stroke-dashoffset: 0;
      stroke-width: 2px;
    }
  }

  .svg-wrapper:hover .shape {
    -webkit-animation: 0.5s draw linear forwards;
    animation: 0.5s draw linear forwards;
  }
`;

export default LoginPage;
