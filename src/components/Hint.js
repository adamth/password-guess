import React, { useContext } from "react";
import { AnswerContext } from "../contexts/answer";
import styled from "styled-components";

const StyledHint = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;

const HintWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Letter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 100%;
  height: 50px;
  border: 1px solid lightgrey;
`;

export const Hint = () => {
  const { password, loadingHint } = useContext(AnswerContext);
  return (
    <StyledHint>
      <h2>Hint</h2>
      {loadingHint ? (
        <div>Fetching your hint...</div>
      ) : (
        <HintWrapper>
          {password?.hint.split("").map((character, i) => (
            <Letter key={i}>{character}</Letter>
          ))}
        </HintWrapper>
      )}
    </StyledHint>
  );
};
