import React, { useEffect, useState } from "react";

function Timer2() {
  const [count, setCount] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => { setCount((prevCount) => prevCount + 1) }, 1000)
    return (
      clearInterval(interval)
    )
  }, []);


  return <div>{count}</div>;
}

export default Timer2;
