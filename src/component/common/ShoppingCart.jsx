import styles from './cart.module.css';
import React, { useContext } from 'react';
import { CartOpenContext, CartItemContext } from '../../App';
import PropTypes from 'prop-types';

export function ShoppingCart() {
  const { setIsCartOpen } = useContext(CartOpenContext);
  const { cartItem } = useContext(CartItemContext);

  function handleModalClick(event) {
    if (event.target === event.currentTarget) {
      setIsCartOpen(false);
    }
  }

  return (
    <div className={styles.modal} onClick={handleModalClick}>
      <div className={styles['modal-content']}>
        <div className={styles['item-list']}>
          {cartItem.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {cartItem.length !== 0 ? (
          <>
            <p className={styles.total}>
              Totol Price: $
              {cartItem.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(1)}
            </p>
            <div className={styles.checkout}>
              Checkout Now<span className='iconify' data-icon='mdi-cash'></span>
            </div>
          </>
        ) : (
          <p className={styles.msg}>Go Ahead and Add Things to This Cart</p>
        )}
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { cartItem, setCartItem } = useContext(CartItemContext);

  function removeFromCart() {
    const updatedCart = cartItem.filter((Item) => Item.id !== item.id);
    setCartItem(updatedCart);
  }

  function increaseAmount() {
    const updatedCart = cartItem.map((Item) => {
      if (Item.id === item.id) {
        Item.amount += 1;
      }
      return Item;
    });
    setCartItem(updatedCart);
  }

  function decreaseAmount() {
    if (item.amount !== 1) {
      const updatedCart = cartItem.map((Item) => {
        if (Item.id === item.id) {
          Item.amount -= 1;
        }
        return Item;
      });
      setCartItem(updatedCart);
    }
  }

  return (
    <div className={styles.item}>
      <div className={styles.remove} onClick={removeFromCart}>
        <span className='iconify' data-icon='mdi-delete'></span>
      </div>
      <img className={styles.image} src={item.image} alt='' />
      <p className={styles.title}>{item.title}</p>
      <p className={styles.price}>${item.price}</p>
      <div className={styles['amount-wrapper']}>
        <div onClick={decreaseAmount}>
          <span className='iconify' data-icon='mdi-minus'></span>
        </div>
        {item.amount}
        <div onClick={increaseAmount}>
          <span className='iconify' data-icon='mdi-plus'></span>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
