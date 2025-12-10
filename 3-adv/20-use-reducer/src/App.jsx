import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  console.log("reducer", state, action);

  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "success":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: "loading" });
    axios.get("http://localhost:3004/articles").then(response => {
      dispatch({ type: "success", payload: response.data });
    });
  }, []);
  return (
    <div className="app">
      {state.isLoading && <div>Loading...</div>}
      {state.data.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};

export default App;
