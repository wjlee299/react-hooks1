import React from 'react'

function ReduceTest2() {

  const people = [
    { name: "Amy", age: 20 },
    { name: "Bob", age: 24 }, 
    { name: "Charlie", age: 20 },
    { name: "David", age: 25 },
    { name: "Emily", age: 20 },
    { name: "Frank", age: 24 },
  ]

  const result = people.reduce((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null) {
      groupedPeople[age] = [];
    }
    groupedPeople[age].push(person.name)
    return groupedPeople;
  }, {})

  return (
    <div>{console.log(result)}</div>
  )
}

export default ReduceTest2