import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMovies } from '../../apis';
//LeILUMLfB7_sZSmXsstj;
//H_vgRSlHuk;
//X-Naver-Client-Id: {애플리케이션 등록 시 발급받은 client id 값}" \
//"X-Naver-Client-Secret: {애플리케이션 등록 시 발급받은 client secret 값}"

/* 
CORS(Cross-Origin Resource Sharing) 에러
: 브라우저 JS에서 다른 도메인 or 포트로 http 요청하면 요청을 제한함

해결방법 =>
1. 요청서버에서 프론트 도메인을 허용
2. 서버를 직접 만들어서 프론트 -> 커스텀 서버 -> naver 서버(요청 서버)
3. webpack dev server의 proxy서버 이용(개발단계에서 밖에 이용못함)
-> 결국 서버가 cors를 해결해 줘야한다.
*/

/* quest
1. items를 useState에 담에서 <Item/>에 반복 출력
2. <InputText />에 입력된 값을 useState에 담기
3. <Form/>이 submit 되면 e.preventDefault(); refreshList();
4. refreshList -> params -> query:movie
*/

const Movie = () => {
  const [list, setList] = useState([]);
  const [movie, setMovie] = useState('');

  // useEffect(() => {
  //   refreshList();
  // }, []);

  const refreshList = async () => {
    const { items } = await getMovies(movie);
    setList(items);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refreshList();
    // setQuery(query);
  };

  return (
    <>
      <h1>영화</h1>
      <Form onSubmit={handleSubmit}>
        <InputText value={movie} onChange={(e) => setMovie(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <List>
        {list.map(({ link, image, title }) => (
          <Item key={link}>
            <a href={link} target="_blank" rel="noreferrer">
              <Thumbnail src={image} />
              <Title dangerouslySetInnerHTML={{ __html: title }} />
            </a>
          </Item>
        ))}
      </List>
    </>
  );
};

const Form = styled.form`
  display: flex;
`;

const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button`
  margin-left: 10px;
`;

const List = styled.ul`
  padding: 20px;
  margin: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Item = styled.li``;

const Thumbnail = styled.img`
  width: 100%;
`;

const Title = styled.p``;

export default Movie;
