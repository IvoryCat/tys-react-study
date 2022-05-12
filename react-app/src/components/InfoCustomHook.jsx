import useInputs from '../hooks/useInputs';

const InfoCustomHook = () => {
  // Reducer로 구현
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

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
export default InfoCustomHook;
