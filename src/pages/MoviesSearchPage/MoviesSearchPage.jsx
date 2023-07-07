import { useState, useEffect } from 'react';
import css from './MoviesSearchPage.module.css';

import { fetchSearch } from 'service/fetchSearch';

const MoviesSearchPage = () => {
  //console.log(fetchSearch('batman'));
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [loading, setLoading] = useState(false);

  const fetchData = async searchQuery => {
    try {
      setLoading(true);
      const fdata = await fetchSearch(searchQuery);
      setResults(fdata);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  /* 
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const fdata = await fetchSearch(searchQuery);
        setResults(fdata.data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []); */

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  //console.log(searchQuery);

  const handleSubmit = e => {
    e.preventDefault();
    fetchData('batman');
    console.log(results);
  };

  // console.log(results);

  return (
    <div>
      <input className={css.inputSearch} onChange={handleChange}></input>
      <button className={css.buttonSearch} onSubmit={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default MoviesSearchPage;
