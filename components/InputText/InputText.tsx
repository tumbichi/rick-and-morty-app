import React from "react";
import styled from "styled-components";

type InputTextProps = {
  placeholder: string;
};

export const InputText = ({ placeholder }: InputTextProps) => {
  return (
    <InputWrapper>
      <Input placeholder={placeholder} />
    </InputWrapper>
  );
};

const Input = styled.input`
  border: 0;
  background: none;
  padding: 10px 22px;
  background-color: #f2f2f2ff;
  color: #121212;

  border-left: 2px solid rgba(104, 164, 58, 0.8);
  :hover {
    border: 2px solid rgba(104, 164, 58, 0.8);
  }
  :focus {
    border: 2px solid rgba(104, 164, 58, 0.8);
  }
`;

const InputWrapper = styled.div`
  min-height: 42px;
  margin: 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
