import { useEffect, useState } from 'react';
import styled from 'styled-components';

// 파라미터에 비구조화 할당을 안해주면 accordionData 자체가 넘어온다.
const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    console.log('index: ', index);
    console.log('activeIndex: ', activeIndex);
    console.log('======');

    //이미 열려있는거 클릭하면 모두 닫기
    return index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index);
  };

  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id}>
          <Header onClick={() => handleClick(index)}>{title}</Header>
          <Body isActive={index === activeIndex}>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.div`
  border: 2px solid #bb5d96;
  margin: 100px;
  border-radius: 10px;
`;

const Item = styled.div`
  & + & {
    border-top: 1px solid #ddd;
  }
`;

const Header = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  font-size: 12px;
  display: ${({ isActive }) => !isActive && 'none'};
`;

export default Accordion;
