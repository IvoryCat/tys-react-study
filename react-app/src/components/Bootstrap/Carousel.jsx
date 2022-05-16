import { useState } from 'react';
import styled from 'styled-components';

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    let nextIndex = activeIndex + i;
    const lastIndex = data.length - 1;
    if (nextIndex < 0) {
      nextIndex = lastIndex;
    } else if (nextIndex > lastIndex) {
      nextIndex = 0;
    }

    setActiveIndex(nextIndex);
  };
  return (
    <Container>
      <List>
        {data.map(({ id, image }, index) => (
          <Image key={id} src={image} isShow={index === activeIndex} />
        ))}
      </List>
      <BtnPrev onClick={() => handleClick(-1)}>이전</BtnPrev>
      <BtnNext onClick={() => handleClick(1)}>다음</BtnNext>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
`;

const List = styled.div``;
const Image = styled.img`
  position: absolute;
  width: 600px;
  height: 400px;
  opacity: ${({ isShow }) => !isShow && '0'};
  transition: opacity 1s;
`;

const Btn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const BtnPrev = styled(Btn)`
  left: 20px;
`;

const BtnNext = styled(Btn)`
  right: 20px;
`;

export default Carousel;
