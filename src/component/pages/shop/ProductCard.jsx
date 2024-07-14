import React, { useContext } from 'react';
import { CartItemContext } from '../../../App';
import styles from './card.module.css';
import PropTypes from 'prop-types';

export function ProductCard({ product }) {
  const { cartItem, setCartItem } = useContext(CartItemContext);

  function handleAddToCart() {
    const productNotExistInCart = cartItem.findIndex((item) => item.id === product.id) === -1;
    if (productNotExistInCart) {
      setCartItem([...cartItem, product]);
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image} />

      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div>
        <p>Buying Rating: {product.rating.rate}</p>
        <p>Purchase Count: {product.rating.count}</p>
      </div>
      <div className={styles.buy} onClick={handleAddToCart}>
        <span className='iconify' data-icon='mdi-plus'></span>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
