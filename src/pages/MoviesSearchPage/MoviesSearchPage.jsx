import { useState, useEffect } from 'react';
import css from './MoviesSearchPage.module.css';

import { fetchSearch } from 'service/fetchSearch';

const MoviesSearchPage = () => {
  //console.log(fetchSearch('batman'));
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fdata = await fetchSearch(searchQuery);
        setResults(fdata.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (!searchQuery) return;
    fetchData();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchQuery(form.elements.search.value);
  };

  console.log(results);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" className={css.inputSearch}></input>
        <button className={css.buttonSearch}>Search</button>
      </form>
    </div>
  );
};

export default MoviesSearchPage;
