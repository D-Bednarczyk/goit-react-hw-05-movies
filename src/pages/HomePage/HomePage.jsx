import { fetchTrending } from 'service/fetchTrending';

const HomePage = () => {
  console.log(fetchTrending);

  const trendingMoviesArray = fetchTrending();
  console.log({trendingMoviesArray.data.result});

  return (
    <div>
      <h2>Trending today</h2>
      <ul></ul>
    </div>
  );
};

export default HomePage;
