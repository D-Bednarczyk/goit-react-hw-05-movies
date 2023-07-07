import axios from 'axios';

export const fetchSearch = searchtext => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${searchtext}&include_adult=false&language=en-US&page=1`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTljNmRlOWVmN2U5OWJmMWJiYmE0NzFjZTRkM2YyMyIsInN1YiI6IjY0YTUxZjgwZGExMGYwMDExY2I0NzlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P3RpoF7N4clR-vZQeo4ofCPwjtK1obP9lrkTduiwnF0',
    },
  };
  const response = axios.request(options);

  return response;
};
