import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <h1>
      Page is not found  Go to <Link to="/">Home page</Link>{' '}
    </h1>
  );
}