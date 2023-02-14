import PageHeading from 'components/PageHeading/PageHeading';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/Services';
import { NotFound } from 'notfound/NotFound';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

 
  const isNotFound = !loading && !movies.length;
  return (
    <>
      
        <PageHeading text={'Trending Movies'}></PageHeading>
        {loading && 'Loading ...'}
        {isNotFound && <NotFound />}
        {error && <div>{error}</div>}
        {movies && <TrendingMovies movies={movies} />}
      
    </>
  );
}