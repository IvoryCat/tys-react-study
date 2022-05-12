import { useState } from 'react';

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const handleClick = (i) => {
    return setNumber(number + i);
  };

  return (
    <>
      <p>
        <h1>현재 카운터 값은 {number}입니다.</h1>
      </p>

      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </>
  );
};
export default Counter2;
