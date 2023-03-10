import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cathegories from '../../components/Cathegories';
import Produtcs from '../../components/Products';
import { getAllBasketItemsForUser } from '../../redux/slices/basketSlice';
import { getAllCathegories } from '../../redux/slices/cathegorySlice';
import { getAllProducts } from '../../redux/slices/productSlice';
import styles from './mainpage.module.css';

export default function Mainpage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCathegories());
    dispatch(getAllBasketItemsForUser());
  }, []);
  return (
    <div className={styles.mainpage_list}>
      <Cathegories />
      <Produtcs />
    </div>
  );
}
