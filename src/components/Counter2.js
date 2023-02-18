import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementC1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "incrementC2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "resetC1":
      return { ...state, firstCounter: 0 };
    case "resetC2":
      return { ...state, secondCounter: 0 };
    default:
      return state;
  }
};

function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Counter 1 : {count.firstCounter}</div>
      <div>Counter 2 : {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "incrementC1", value: 1 })}>
          increment Counter 1
        </button>
        <button onClick={() => dispatch({ type: "incrementC1", value: 5 })}>
          increment Counter 1 by 5
        </button>
        <button onClick={() => dispatch({ type: "resetC1" })}>reset</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "incrementC2", value: 1 })}>
          increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "incrementC2", value: 5 })}>
          increment Counter 2 by 5
        </button>
        <button onClick={() => dispatch({ type: "resetC2" })}>reset</button>
      </div>
    </>
  );
}

export default Counter2;
