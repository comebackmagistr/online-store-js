import React from 'react';
import { useSelector } from 'react-redux';
import OneCardProduct from '../../UI/OneCardProduct/OneCardProduct';
import styles from './products.module.css';

export default function Produtcs() {
  const products = useSelector((store) => store.products);
  return (
    <div>
      {products.length > 0
        ? (
          <div className={styles.cards_row}>
            {products.map((el) => (
              <OneCardProduct key={el.id} card={el} />
            ))}
          </div>
        )
        : (
          <div>Loading</div>
        )}

    </div>
  );
}
