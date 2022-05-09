const Jsx = () => {
  const name = '리액트';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <>
      <div style={style}>{name}</div>

      <h1>{name} 리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
      {name === '리액트' ? (
        <h1>3항 연산자 : 리액트 입니다.</h1>
      ) : (
        <h2>3항 연산자 : 리액트가 아닙니다.</h2>
      )}
      {name === '리액트' && <h1>'&&' 조건부 렌더링 : 리액트입니다.</h1>}
      <div>{name || '||(undefined 렌더링) => 이름이 없습니다.'}</div>
      <div>{name ?? '??(nullish coalescing) => 이름이 없습니다.'}</div>
      <div>
        <input />
      </div>
    </>
  );
};
export default Jsx;
const a = 1;
export { a };

/* 
* JSX에서는 &&가 비교 연산자이다.
* => 조건부 렌더링


* # JS에서 falsy한 값
* 0, -0, "", false, null, undefined, NaN,

* # ?? 문법은 최근 추가된 문법으로, 0이거나 ""(빈 스트링) 일때는 통과시킨다. 
* => nullish coalescing
* => null이나 undefined일때만 거짓으로 취급 

// * 내용이 필요없는 태그는 self-closing 해야한ㄷㅏ. </>
//  * <input />, <br/>
*/
