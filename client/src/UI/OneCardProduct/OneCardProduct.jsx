import React from 'react';
import styles from './OneCardProducts.module.css';

export default function OneCardProduct({ card }) {
  return (
    <div className={styles.one_card_body}>
      <img src={card?.photo} alt="#" />
      <span>
        Название:
        {' '}
        {card?.title}
      </span>
      <span>
        Информация о товаре:
        {' '}
        {card?.about}
      </span>
      <span>
        Цена:
        {' '}
        {card?.price}
        {' '}
        рублей
      </span>
    </div>
  );
}
