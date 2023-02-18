import React, { useState } from 'react'


function StateArray() {
  const [numList, setNumList] = useState([1, 2])

  const handleClick = (event) => {
    setNumList([...numList, Math.floor(Math.random() * 10) + 1])
  }

  const numListElements = numList.map((item, index) => <div key={index}>{item}</div>)

  return (
    <>
      <button onClick={handleClick}>Add Number</button>
      <div>{numListElements}</div>
    </>
  )
}

export default StateArray