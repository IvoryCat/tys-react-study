import styled from 'styled-components';

const Item = (props) => {
  const { id, text } = props.data;
  return (
    <Container key={id}>
      <label>
        <input type="checkbox" />
        <Content>{text}</Content>
      </label>
      <BtnDelete onClick={() => props.handleDelete(id)}>삭제</BtnDelete>
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

const Content = styled.span``;

const BtnDelete = styled.button``;

export default Item;
