import React from 'react';
import { useSelector } from 'react-redux';
import styles from './cathegories.module.css';

export default function Cathegoris() {
  const cathegories = useSelector((store) => store.cathegories);
  return (
    <div className={styles.cathegories_column}>
      {cathegories.map((el) => (
        <span>{el.name}</span>
      ))}
    </div>
  );
}
