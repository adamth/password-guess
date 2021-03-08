export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PASSWORD_STARTED": {
      return {
        ...state,
        loadingHint: true,
        error: null,
      };
    }
    case "FETCH_PASSWORD_COMPLETE": {
      return {
        ...state,
        loadingHint: false,
        password: action.password,
        error: null,
      };
    }
    case "VERIFY_PASSWORD_STARTED": {
      return {
        ...state,
        loadingResult: true,
        error: null,
      };
    }
    case "VERIFY_PASSWORD_COMPLETE": {
      const correct = action.result.correct;
      return {
        ...state,
        correct,
        loadingResult: false,
        results: [...state.results, action.result],
        error: null,
      };
    }
    case "ERROR": {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
