import React, { useState, useEffect, useContext } from 'react';
import { NavBar } from '../../common/NavBar';
import { ProductCard } from './ProductCard';
import { fetchProduct } from './data/fetchProduct';
import { CartOpenContext } from '../../../App';
import { ShoppingCart } from '../../common/ShoppingCart';
import styles from './shop.module.css';

export function ShopPage() {
  const { isCardOpen } = useContext(CartOpenContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const productNum = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts = [];

      for (let i = 1; i <= productNum; i++) {
        const product = await fetchProduct(`https://fakestoreapi.com/products/${i}`);
        product.amount = 1;
        fetchedProducts.push(product);
        setProducts(() => fetchedProducts);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <NavBar></NavBar>

      <h1>Products</h1>
      {isLoading && <p>Loading products...</p>}
      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      {isCardOpen && <ShoppingCart />}
    </>
  );
}
