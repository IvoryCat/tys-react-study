import { useState } from 'react';
import styled from 'styled-components';

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Container>
        <Button onClick={() => setIsShow(!isShow)}>Dropdown Button</Button>
        {isShow && (
          <Menu>
            <Item>Item #1</Item>
            <Item>Item #2</Item>
            <Item>Item #3</Item>
            <Item>Item #4</Item>
          </Menu>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  background: #198754;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;
`;

const Menu = styled.ul`
  position: absolute;
  top: 45px;
  background: #fff;
  margin: 0;
  margin-left: 10px;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
  /* display: ${({ isShow }) => !isShow && 'none'}; 조건부 렌더링일때 필요없음
    */
`;

const Item = styled.li`
  padding: 10px;
  cursor: pointer;
  & + & {
    border-top: 1px solid #ddd;
  }
  :hover {
    background-color: #efefef;
  }
`;

export default Dropdown;
