import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';


import Header from './Header/Header';


const HomePage = lazy(() =>
  import('./HomePage/HomePage')
);

const MoviesPage = lazy(() =>
  import('../views/MoviesPage')
);
const SearchDetailsPage = lazy(() =>
  import(
    './SearchDetailsPage/SearchDetailsPage'
  )
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' ));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<SearchDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

         
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};