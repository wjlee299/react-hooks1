import React from "react";

function DataFetching3() {
  const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject("Could not retrieve data");
        }
      });

      request.open("GET", resource);
      request.send();
    });
  };

  const handleTest = () => {
    getTodos("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        console.log("Promise 1 resolved: " + data);
        return getTodos("https://jsonplaceholder.typicode.com/todos/2").then(
          (data) => {
            console.log("Promise 2 resolved: " + data);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <div>{handleTest()}</div>;
}

export default DataFetching3;
