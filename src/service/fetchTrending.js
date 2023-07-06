import axios from 'axios';

//const api_url = 'https://api.themoviedb.org/3/trending/movie/day';

//const api_key = `7e9c6de9ef7e99bf1bbba471ce4d3f23`;

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTljNmRlOWVmN2U5OWJmMWJiYmE0NzFjZTRkM2YyMyIsInN1YiI6IjY0YTUxZjgwZGExMGYwMDExY2I0NzlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P3RpoF7N4clR-vZQeo4ofCPwjtK1obP9lrkTduiwnF0',
  },
};

/* export const fetchTrending = async () => {
  //console.log(`${api_url}?api_key=${api_key}`);
  const { response } = await axios.get(`${api_url}?api_key=${api_key}`);

  return response;
}; */

export const fetchTrending = async () => {
  const response = await axios.request(options);
  return response;
};

/* async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
} */

/* axios
.request(options)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.error(error);
}); */
