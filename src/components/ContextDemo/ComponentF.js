import React, { useContext } from 'react'
import { UserContext } from "/Users/leewenjin/frontend/react-hooks/src/App.js"


function ComponentF() {

  const userValue = useContext(UserContext);
  return (
    <div>{userValue}</div>
  )
}

export default ComponentF