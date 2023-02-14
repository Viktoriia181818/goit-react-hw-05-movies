import css from './Header.module.css';
import Navigation from 'components/Navigation/Navigation';


export default function Headers() {
  return (
    <header className={css.header}>
        <Navigation />
    </header>
  );
}