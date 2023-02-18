import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'


function ParentComponent() {

  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(5000)

  const incrementAge = useCallback(() => {
    setAge(prevAge => prevAge + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(prevSalary => prevSalary + 1000)
  }, [salary])

  return (
    <>
      {console.log("Parent Comp renders")}
      <div>useCallback Demo</div>
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  )
}

export default ParentComponent