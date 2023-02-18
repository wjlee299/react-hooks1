import React, { useReducer } from 'react'
import "./ColourChangeCSS.css"


const initialState = 'style-color-red';

const reducer = (state, action) => {
  switch (action) {
    case "Red":
      return state = 'style-color-red';
    case "Green":
      return state = 'style-color-green';
    case "Blue":
      return state = 'style-color-blue';
    default:
      return state;

  }
}

function ColourChange() {

  const [color, colorDispatch] = useReducer(reducer, initialState);


  return (
    <>
      <h1 className={`${color}`}>This sentence changes colour.</h1>
      <div>
        <button onClick={() => colorDispatch("Red")}>Red</button>
        <button onClick={() => colorDispatch("Green")}>Green</button>
        <button onClick={() => colorDispatch("Blue")}>Blue</button>
      </div>
    
    
    </>
  )
}

export default ColourChange