import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>React Next.js Sample</title>
        <meta name="description" content="A sample web application built with React, Next.js, TypeScript, and Shadcdn" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to the React & Next.js Sample</h1>
        <p>This is a sample web application demonstrating core features.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;