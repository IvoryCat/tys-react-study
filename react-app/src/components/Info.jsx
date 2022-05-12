import { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  // Reducer로 구현
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };

  //   useEffect(() => {
  //     console.log('렌더링이 완료');
  //     console.log({
  //       name,
  //       nickname,
  //     });

  //     return () => {
  //       console.log('unmount');
  //       console.log(name);
  //     };
  //   }, [name]);

  // const onChageNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />

        {/* <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChageNickname} /> */}
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </>
  );
};
export default Info;
