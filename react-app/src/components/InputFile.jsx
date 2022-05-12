import { useCallback, useRef } from 'react';

// 업로드 버튼을 누르면 input file이 클릭 되도록

const InputFile = () => {
  const fileEl = useRef(null);

  return (
    <>
      <button onClick={() => fileEl.current.click()}>업로드</button>
      <input type="file" style={{ display: 'none' }} ref={fileEl} />
    </>
  );
};
export default InputFile;

//useRef는 html에 직접 접근할때 쓰기도 하고 값이 변하는데 렌더링이 변함이 없을때도 사용한다.