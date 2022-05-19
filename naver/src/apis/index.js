import axios from 'axios';

export const getMovies = async (text) => {
  const config = {
    method: 'GET',
    url: '/v1/search/movie.json', // proxy 등록한 url은 지워준다.
    headers: {
      'X-Naver-Client-Id': 'LeILUMLfB7_sZSmXsstj',
      'X-Naver-Client-Secret': 'H_vgRSlHuk',
    },
    params: {
      query: text,
    },
  };
  const result = await axios(config);

  console.log(result.data);

  return result.data;
};
