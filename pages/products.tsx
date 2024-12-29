import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Products = () => {
  const sampleProducts = [
    { title: 'Product 1', description: 'Description for product 1', price: 100 },
    { title: 'Product 2', description: 'Description for product 2', price: 150 },
  ];

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Our Products</h1>
        <div className={styles.productGrid}>
          {sampleProducts.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;