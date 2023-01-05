import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIdCathegory } from '../../redux/slices/productSlice';
import styles from './cathegories.module.css';

export default function Cathegoris() {
  const dispatch = useDispatch();
  const cathegories = useSelector((store) => store.cathegories);
  const filterHandler = (id) => {
    dispatch(getIdCathegory(id));
  };
  return (
    <div className={styles.cathegories_column}>
      {cathegories.map((el) => (
        <div key={el.id}>
          <button type="button" onClick={() => filterHandler(el.id)} className={styles.button_cathegory}>{el.name}</button>
        </div>
      ))}
    </div>
  );
}
