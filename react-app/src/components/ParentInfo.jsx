import { useState } from 'react';
import Info from './Info';

const ParentInfo = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow(!isShow)}>toggle</button>
      {isShow && <Info />}
    </>
  );
};
export default ParentInfo;
