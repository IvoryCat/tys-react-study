import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);

  const buttonEl = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      // 클릭한게 버튼이 아닐때만 false로 만들어야 한다.
      console.log('target', e.target);
      console.log('button', buttonEl.current);

      if (e.target !== buttonEl.current) {
        setIsShow(false);
      }
    };
    document.body.addEventListener('click', onClick);
    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <>
      <Container>
        <Button ref={buttonEl} onClick={() => setIsShow(!isShow)}>
          Dropdown Button
        </Button>

        <Menu isActive={isShow}>
          <Item>Item #1</Item>
          <Item>Item #2</Item>
          <Item>Item #3</Item>
          <Item>Item #4</Item>
        </Menu>
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
  display: ${({ isActive }) => !isActive && 'none'};
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
