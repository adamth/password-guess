import React, { useState, useContext } from "react";
import styled from "styled-components";

import { AnswerContext } from "../contexts/answer";

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  letter-spacing: 4px;
  outline: none;
  border: none;
  font-size: 24px;
  border-radius: 2px;
  padding: 15px;
  background: #eee;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
`;

export const GuessForm = () => {
  const [value, setValue] = useState("");
  const { submitAnswer, password } = useContext(AnswerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      hint: password.hint,
      userAnswer: value,
    };
    submitAnswer(data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input value={value} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" disabled={!value}>
            Submit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
