import { useState } from 'react';

const Counter = () => {
  // let number = 5;
  const [number, setNumber] = useState(5);

  const handleClick = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
export default Counter;
