import React, { useState } from "react";

function Statehandling() {
  const [count, setcount] = useState(20);
  function doIncreament(){
    setcount(count+20)
  }
  return (
    <div>
      <div>
        Statehandling
        <h2>Counter value{count}</h2>
      </div>
      <div>
        <button onClick={doIncreament}>Increament</button>
      </div>
    </div>
  );
}

export default Statehandling;
