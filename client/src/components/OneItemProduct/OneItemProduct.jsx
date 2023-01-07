import React from 'react';
import styles from './OneItemProduct.module.css';

export default function OneItemProduct({ item }) {
  return (
    <div>
      {item?.id}
      <img className={styles.image_one_item} src={item?.Product?.photo} alt="#" />
      {item?.Product?.title}
    </div>
  );
}
