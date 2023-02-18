import "./App.css";
import React from "react";
import ComponentA from "./components/ReducerContextDemo/ComponentA";
import ComponentB from "./components/ReducerContextDemo/ComponentB";
import ComponentC from "./components/ReducerContextDemo/ComponentC";
import { useReducer } from "react";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>
          Count = {count}
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
