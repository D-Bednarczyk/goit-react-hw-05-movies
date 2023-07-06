import { fetchTrending } from 'service/fetchTrending';

export const App = () => {
  console.log(fetchTrending());

  return <div>React homework template</div>;
};
