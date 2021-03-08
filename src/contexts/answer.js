import React from "react";
import { createContext, useEffect, useReducer, useMemo } from "react";
import { newPassword, verifyPassword } from "../utils/api";
import { reducer } from "./reducer";

const stub = () => {
  throw new Error("You forgot to wrap your component in <AnswerProvider>.");
};

const initialContext = {
  loadingHint: true,
  loadingResult: false,
  error: null,
  password: null,
  answer: null,
  correct: false,
  submitAnswer: stub,
  results: [],
};

export const AnswerContext = createContext(initialContext);

const { Provider } = AnswerContext;

export const AnswerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  const handleFetchNewPassword = async () => {
    dispatch({ type: "FETCH_PASSWORD_STARTED" });
    try {
      const response = await newPassword();
      const { data } = await response.json();

      dispatch({
        type: "FETCH_PASSWORD_COMPLETE",
        password: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  const handleVerifyPassword = async (answerData) => {
    dispatch({ type: "VERIFY_PASSWORD_STARTED" });
    try {
      const response = await verifyPassword(answerData);
      const data = await response.json();
      dispatch({
        type: "VERIFY_PASSWORD_COMPLETE",
        result: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  useEffect(() => {
    handleFetchNewPassword();
  }, []);

  const contextValue = useMemo(() => {
    return {
      ...state,
      submitAnswer: handleVerifyPassword,
    };
  }, [state]);

  return <Provider value={contextValue}>{children}</Provider>;
};
