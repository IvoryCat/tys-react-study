const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람', '눈'];
  const nameList = names.map((item) => <li>{item}</li>);

  return (
    <div>
      <ul>
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
      {/* {[<li>눈사람</li>, <li>얼음</li>, <li>눈</li>, <li>바람</li>]} */}
      <ul>{nameList}</ul>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
