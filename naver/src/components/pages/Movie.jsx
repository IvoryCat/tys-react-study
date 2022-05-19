import { useEffect, useState } from 'react';
import { getMovies } from '../../apis';
import MovieList from '../templates/Movie/List';
import SearchForm from '../templates/Movie/SearchForm';

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
  // useState가 계속 많아지므로 여러 변수를 parmas로 한꺼번에 관리하기
  const [params, setParams] = useState({
    query: '',
    country: 'ALL',
  });
  // const [query, setQuery] = useState('');
  // const [country, setCountry] = useState('ALL');

  // 비구조화 할당
  const { query, country } = params;

  const [list, setList] = useState([]);

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    if (!query) return;

    /* All일 때 country 제거하는 방법 1
    const params = {
      query: movie,
      country: country,
    };
    if (country === 'ALL') {
      delete params.country;
    } 
    */

    //All일 때 country 제거하는 방법 2
    const params = {
      query: query, //생략가능
    };

    if (country !== 'ALL') {
      params.country = country;
    }

    const { items } = await getMovies(params);
    setList(items);
  };

  // handleChange({ name: 'query', value: 'spiderman' });
  // handleChange({ name: 'query', value: 'spiderman' });
  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화</h1>
      <SearchForm onChange={handleChange} />
      <MovieList data={list} />
    </>
  );
};

export default Movie;
