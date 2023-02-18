import React, { useState } from "react";

function TimerDemo() {

  const [display, setDisplay] = useState(true)

  setInterval(() => {
    setDisplay(prevDisplay => !prevDisplay)
  }, 2000)

  return (
    <div>
      {display && <h3>testing</h3>}
      {!display && <h2>testing</h2>}
    </div>
  );
}

export default TimerDemo;
