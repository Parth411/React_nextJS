import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>React Next.js App</h1>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </nav>
  </header>
);

export default Header;