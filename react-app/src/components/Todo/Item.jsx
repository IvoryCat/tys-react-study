import styled, { css } from 'styled-components';

const Item = ({ data, onDelete, onChecked }) => {
  const { id, text, isDone } = data;
  const handleClick = () => onDelete(id);
  const handleChange = () => {
    /* 
    1. data의 현재 isDone값을 반대로
    2. input의 value(체크여부)를 isDone으로
    */
    onChecked(id);
  };

  return (
    <Container key={id}>
      <label>
        <input type="checkbox" checked={isDone} onChange={handleChange} />
        <Content isDone={isDone}>{text}</Content>
      </label>
      <BtnDelete onClick={handleClick}>삭제</BtnDelete>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  & + & {
    border-top: 1px solid #efefef;
  }
`;

const Content = styled.span`
  /* color: ${(props) => props.isDone && '#ddd'};
  text-decoration: ${({ isDone }) => isDone && 'line-through'}; */

  ${({ isDone }) =>
    isDone &&
    css`
      color: #ddd;
      text-decoration: line-through;
    `}
`;

const BtnDelete = styled.button``;

export default Item;
