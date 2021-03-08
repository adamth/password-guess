import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
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
  background-color: ${({ correct }) =>
    correct ? "lightgreen" : "transparent"};
`;

const AnswerResult = ({ answer, highlight, correct }) => {
  return (
    <Wrapper>
      {answer.split("").map((character, i) => (
        <Letter correct={highlight?.includes(i.toString()) || correct}>{character}</Letter>
      ))}
    </Wrapper>
  );
};

export const Result = ({ result }) => {
  return <AnswerResult answer={result.answer} highlight={result.highlight} correct={result.correct} />;
};

Result.propTypes = {
  result: PropTypes.shape({
    correct: PropTypes.bool.isRequired,
    hint: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    highlight: PropTypes.arrayOf(PropTypes.string),
  }),
};
