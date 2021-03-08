import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Result } from "./Result";
import { AnswerContext } from "../contexts/answer";

const Wrapper = styled.div`
  width: 100%;
`;

const Results = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  padding: 20px 40px;
  border-bottom: ${({ border }) => border && "1px solid lightgray"};
`;

const ListHeader = () => {
  const { loadingResult, correct } = useContext(AnswerContext);
  let text = "Try again...";
  if (loadingResult) {
    text = "Checking your answer...";
  }
  if (correct) {
    text = "Correct!";
  }
  return <h3>{text}</h3>;
};

export const ResultsList = () => {
  const { results, loadingHint } = useContext(AnswerContext);
  if (loadingHint) return null;

  return results.length ? (
    <Wrapper>
      <ListHeader />
      <Results>
        {results.map((result, i) => (
          <Row key={i} border={i !== results.length - 1}>
            <Result result={result} />
          </Row>
        ))}
      </Results>
    </Wrapper>
  ) : null;
};

ResultsList.propTypes = {
  items: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }),
};
