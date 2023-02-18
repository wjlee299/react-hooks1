import React from "react";

function DataFetching4() {

  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (response.status !== 200) {
      throw new Error('cannot fetch the data');
    }

    const data = await response.json();
    console.log(data);
  }

  getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err));


  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return <div>DataFetching4</div>;
}

export default DataFetching4;
