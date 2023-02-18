import React, { useEffect, useState } from 'react'

function EffectMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = event => {
    console.log('Mouse event')
    setX(event.clientX)
    setY(event.clientY)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)
    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>{x}, {y}</div>
  )
}

export default EffectMouse