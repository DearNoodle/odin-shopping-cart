import { NavBar } from '../../common/NavBar';
import styles from './home.module.css';
import { ShoppingCart } from '../../common/ShoppingCart';
import { CartOpenContext } from '../../../App';
import React, { useContext } from 'react';
export function HomePage() {
  const [isCardOpen] = useContext(CartOpenContext);
  return (
    <>
      <NavBar></NavBar>
      <h1 className={styles.title}>FakeStore 2024</h1>
      <p className={styles.subtitle}>Best Site to Purchase Fake Stuff and Nothing More</p>
      {isCardOpen && <ShoppingCart />}
    </>
  );
}
