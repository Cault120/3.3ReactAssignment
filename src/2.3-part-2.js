import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(count + 1);
  };
  const handlerMinus = () => {
    if ((count - 1) < 0) {
      alert("Try again stupid.");
      return;
    }
    setCount(count - 1);
  };

  const handlerReset = () => {
    setCount(0);
  }

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
      <br></br>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
}
export default Counter;
