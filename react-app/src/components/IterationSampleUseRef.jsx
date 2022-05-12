import { useRef, useState } from 'react';

/* 
useRef를 사용하여 
<IterationSample />의 nextId를 useRef로 교체

1. nextId를 useRef로 선언
2. nextId사용할 때, 바꿀때 nextId.current로 접근
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
  const nextId = useRef(defaultNames.length + 1);

  // let nextId = 5; //렌더링 되면서 다시 5가 된다.
  const handleClick = () => {
    if (!text) {
      return;
    }
    const newNames = [...names, { id: nextId.current, text }];
    console.log(text);
    setNames(newNames);
    setText('');
    // setNextId(nextId.current + 1);
    nextId.current += 1;
  };

  const handleDelete = (deleteId) => {
    // names 중에서 id가 deleteId와 다른 item만 뽑아서 newNames를 만들기
    const newNames = names.filter((name) => name.id !== deleteId);
    setNames(newNames);
  };

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        ref={nextId}
      />
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
