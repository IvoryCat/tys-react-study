import axios from 'axios';

const instance = axios.create({
  headers: {
    'X-Naver-Client-Id': 'LeILUMLfB7_sZSmXsstj',
    'X-Naver-Client-Secret': 'H_vgRSlHuk',
  },
});

export const getMovies = async (params) => {
  const config = {
    method: 'GET',
    url: '/v1/search/movie.json', // proxy 등록한 url은 지워준다.
    params: params, //생략가능
  };
  const result = await instance(config);

  return result.data;
};

export const getBooks = async (params) => {
  const config = {
    method: 'GET',
    url: '/v1/search/book.json', // proxy 등록한 url은 지워준다.
    params: params, //생략가능
  };
  const result = await instance(config);

  return result.data;
};
