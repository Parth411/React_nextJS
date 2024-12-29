import styles from '../styles/Home.module.css';

interface ProductProps {
  title: string;
  description: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({ title, description, price }) => (
  <div className={styles.productCard}>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
  </div>
);

export default ProductCard;