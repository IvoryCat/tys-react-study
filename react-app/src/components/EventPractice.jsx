import { useState } from 'react';
const defaultForm = { userName: '', message: '' };
const EventPractice = () => {
  // const [userName, setUserName] = useState('');
  // const [message, setMessage] = useState('');

  // const [form, setForm] = useState({ userName: '', message: '' });
  const [form, setForm] = useState(defaultForm);

  const { userName, message } = form;

  const handleClick = () => {
    // alert(userName + ' : ' + message);
    alert(`${userName} : ${message}`); //String literal

    // setUserName('');
    // setMessage('');
    // setForm({ userName: '', message: '' });
    setForm(defaultForm);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target; //비구조화 할당

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="userName"
        placeholder="이름을 입력하세요"
        // onChange={(e) => {
        //   setUserName(e.target.value);
        // }}
        onChange={handleChange}
        value={userName}
      />

      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        // onChange={(e) => {
        //   // console.log(e);
        //   // console.log(e.target);
        //   // console.log(e.target.value);
        //   setMessage(e.target.value);
        // }}
        onChange={handleChange}
        value={message} //양방향 데이터 바인딩
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};
export default EventPractice;

// input이 하나 더 생길때
// useState 선언 + 함수 선언

//Q. input이 20개면 useState도 20개 필요한가?
//A. input값을 담는 객체를 선언하여 useState 하나로 관리하는 방법을 사용
