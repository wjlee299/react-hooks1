import React, { useEffect, useState } from 'react'

function EffectDemo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log("Updating document title")
  }, [count])

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleInput = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleInput} ></input>
      <button onClick={incrementCount}>Clicked {count} times</button>
      <div>{name}</div>
    </div>
  )
}

export default EffectDemo