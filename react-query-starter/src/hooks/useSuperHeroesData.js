import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always', // 유저가 버튼 누를 때마다 refetch
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true, // 브라우저에 focus가 없어도 refetch 반복 실행
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};
