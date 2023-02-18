import React from 'react'

function ReduceTest() {


  const items = [
    { name: "Keyboard", price: 10 },
    { name: "Mouse", price: 5 }, 
    { name: "Monitor", price: 20 },
  ]

  // let totalPrice = 0;
  // items.forEach(item => {
  //   totalPrice += item.price
  // })

  const totalPrice = items.reduce((total, item) => {
    return total + item.price;
  }, 0)

    return (
      <div>{totalPrice}</div>
    )
  }

export default ReduceTest