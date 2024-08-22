import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = () => {
    /** Due to the React batching it always give or increment 1 when call the method */
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    /** To avoid the issue we can used an callback method into the setCounter function */
    setCounter((prevCounter) => prevCounter + 1); // preValue is previous value from the react state
    setCounter((prevCounter) => prevCounter + 1); // preValue is previous value from the react state
    setCounter((prevCounter) => prevCounter + 1); // preValue is previous value from the react state
    setCounter((prevCounter) => prevCounter + 1); // preValue is previous value from the react state
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course from hitesh {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>

      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
