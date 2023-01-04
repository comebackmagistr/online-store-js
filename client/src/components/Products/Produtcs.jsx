import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/slices/productSlice';
import OneCardProduct from '../../UI/OneCardProduct/OneCardProduct';
import styles from './products.module.css';

export default function Produtcs() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
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
