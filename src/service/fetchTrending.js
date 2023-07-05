const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTljNmRlOWVmN2U5OWJmMWJiYmE0NzFjZTRkM2YyMyIsInN1YiI6IjY0YTUxZjgwZGExMGYwMDExY2I0NzlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P3RpoF7N4clR-vZQeo4ofCPwjtK1obP9lrkTduiwnF0',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
