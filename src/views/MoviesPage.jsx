import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchPage from 'components/SearchPage/SearchPage';
import { queryMovies } from 'services/Services';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import PageHeading from 'components/PageHeading/PageHeading';

 const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {
      setLoading(true);
      queryMovies(searchRequest)
        .then(results => {
          if (!results.length) {
            alert('No movies found!');
          }

          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(setLoading(false));
    };
    fetchMovie();
  }, [searchRequest]);

  // onSubmit
  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
        <PageHeading text={'Movie Search'} />
        {/* <h1>Movies search</h1> */}
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}

        <SearchPage onSearch={onSubmit} />
        {movies && <TrendingMovies movies={movies} prevLocation={location} />}
    </>
  );
};

export default MoviesPage;

