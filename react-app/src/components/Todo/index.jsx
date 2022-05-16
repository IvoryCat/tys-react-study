import { useState, useRef } from 'react';
import styled from 'styled-components';
import Item from './Item';

/*
1. 리스트에 추가하기
  1. <InputText/>값을 useState변수 text에 저장
  2. 투두리스트 담을 list useState 변수 선언  
  3. handleSubmit이 실행되면 text값을 list변수에 추가
2. 리스트에서 삭제
  1. list 추가할 때 자료구조를 {id:1, text:"할일"} 객체로 변경
  2. id로 쓸 nextId useRef 선언
  3. 추가될 때마다 nextId 1씩 증가
  4. 삭제버튼 누르면 id와 받아와서 filter함수로 id 일치하는 아이템 제외
*/

const Todo = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');
  const nextId = useRef(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 텍스트를 리스트에 추가하는 코드
    const nextList = [...list, { id: nextId.current, text }];
    setList(nextList);
    setText('');
    nextId.current++;
  };

  const handleDelete = (id) => {
    const nextList = list.filter((item) => item.id !== id);
    setList(nextList);
  };

  return (
    <Layout>
      <Container>
        <Title>일정 관리</Title>
        <Form onSubmit={handleSubmit}>
          <InputText onChange={(e) => setText(e.target.value)} value={text} />
          <BtnSubmit>추가</BtnSubmit>
        </Form>
        <Body>
          <List>
            {list.map((item, i) => (
              <Item data={item} onDelete={handleDelete} />
            ))}
          </List>
        </Body>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  background: #c6cace;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 400px;
`;

const Title = styled.div`
  background: #22b8cf;
  text-align: center;
  color: #ffffff;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button``;

const Body = styled.div`
  background: #ffffff;
  min-height: 300px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default Todo;
