import { useState } from 'react';

/* 
1. input에 입력된 값을 배열에 추가
  1. 추가버튼을 누르면 input에 입력된 값 alert
    1. useState 변수 text 선언
    2. input이 onChange될 때 e.target.value를 set함수에 넣기
    3. button이 onClick될 때 text값 aleart
2. 배열에 text추가 화면에 반영
  1. names배열 useState선언
  2. handleClick에서
    - newNames선언: 기존 names배열에 text가 추가돈 새로운 배열 선언(펼침연산자 이용).
    - setNames에 newNames 넣기
    - 새로운 배열을 names로 교체
2. 배열에서 제거 
  - 더블클릭하면 아이템의 id값을 alert
*/

const defaultNames = [
  {
    id: 1,
    text: '눈사람',
  },
  {
    id: 2,
    text: '얼음',
  },
  {
    id: 3,
    text: '눈',
  },
  {
    id: 4,
    text: '바람',
  },
  {
    id: 5,
    text: '눈',
  },
];

const IterationSample = () => {
  const [text, setText] = useState('');
  const [names, setNames] = useState(defaultNames);
  const [nextId, setNextId] = useState(defaultNames.length + 1);

  // let nextId = 5; //렌더링 되면서 다시 5가 된다.
  const handleClick = () => {
    if (!text) {
      return;
    }
    const newNames = [...names, { id: nextId, text }];
    console.log(text);
    setNames(newNames);
    setText('');
    setNextId(nextId + 1);
  };

  const handleDelete = (deleteId) => {
    // names 중에서 id가 deleteId와 다른 item만 뽑아서 newNames를 만들기
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name) => (
          <li key={name.id} onDoubleClick={() => handleDelete(name.id)}>
            {name.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
