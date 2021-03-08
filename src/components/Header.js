import React, { useContext } from "react";
import styled from "styled-components";
import { AnswerContext } from "../contexts/answer";

const ErrorContainer = styled.div`
  padding: 20px;
  color: white;
  background: tomato;
`;

const Wrapper = styled.header`
  padding: 30px;
  color: white;
  background: dodgerblue;
  text-align: center;
`;

export const Header = () => {
  const { error } = useContext(AnswerContext);
  return (
    <React.Fragment>
      {error && <ErrorContainer>{error.message}</ErrorContainer>}
      <Wrapper className="app-header">
        <h1>Guess The Password!</h1>
      </Wrapper>
    </React.Fragment>
  );
};
