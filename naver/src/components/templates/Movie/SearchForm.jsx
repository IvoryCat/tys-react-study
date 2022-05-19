import { useState } from 'react';
import styled from 'styled-components';
import { countryList } from '../../../data';

// handleChange({ name: 'query', value: 'spiderman' });
// handleChange({ name: 'query', value: 'spiderman' });

const SearchForm = ({ onChange }) => {
  const [movie, setMovie] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange({ name: 'query', value: 'movie' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <select
        onChange={(e) => onChange({ name: 'country', value: e.target.value })}
      >
        <option value="ALL">전체</option>
        {countryList.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <InputText value={movie} onChange={(e) => setMovie(e.target.value)} />
      <BtnSubmit>검색</BtnSubmit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button`
  margin-left: 10px;
`;

export default SearchForm;
