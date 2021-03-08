import React from "react";
import styled from "styled-components";

import { Hint } from "./components/Hint";
import { Header } from "./components/Header";
import { ResultsList } from "./components/GuessList";
import { GuessForm } from "./components/GuessForm";
import { AnswerContextProvider } from "./contexts/answer";

const Wrapper = styled.div`
  max-width: 480px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const App = () => {
  return (
    <AnswerContextProvider>
      <Header />
      <Wrapper>
        <Hint />
        <ResultsList />
        <GuessForm />
      </Wrapper>
    </AnswerContextProvider>
  );
};
