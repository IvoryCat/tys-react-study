import { useState } from 'react';
import styled from 'styled-components';

const Form = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputText onChange={(e) => setText(e.target.value)} value={text} />
      <BtnSubmit>추가</BtnSubmit>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button``;

export default Form;
