import { createContext, useEffect, useReducer } from "react";
import { loadState, saveState } from "../utils/storage.js";

export const QuizContext = createContext(null);

// user     : string | null
// progress : { [quizId]: { current, answers: { [qIndex]: optionIndex } } }
// results  : { [quizId]: { user, score, total } }
const initialState = { user: null, progress: {}, results: {} };
const emptyProgress = { current: 0, answers: {} };

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.name };

    case "ANSWER": {
      const p = state.progress[action.quizId] ?? emptyProgress;
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.quizId]: { ...p, answers: { ...p.answers, [action.qIndex]: action.option } },
        },
      };
    }

    case "GO": {
      const p = state.progress[action.quizId] ?? emptyProgress;
      return {
        ...state,
        progress: { ...state.progress, [action.quizId]: { ...p, current: action.index } },
      };
    }

    case "FINISH": {
      const { [action.quizId]: _done, ...rest } = state.progress;
      return {
        ...state,
        progress: rest,
        results: {
          ...state.results,
          [action.quizId]: { user: state.user, score: action.score, total: action.total },
        },
      };
    }

    case "RETRY": {
      const { [action.quizId]: _p, ...progress } = state.progress;
      const { [action.quizId]: _r, ...results } = state.results;
      return { ...state, progress, results };
    }

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, loadState);

  // every change -> localStorage (reload la same place la resume aagum)
  useEffect(() => saveState(state), [state]);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
}