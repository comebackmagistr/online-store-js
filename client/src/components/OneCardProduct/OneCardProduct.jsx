import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasketItemForUser, deleteBasketItemForUser } from '../../redux/slices/basketSlice';
import styles from './OneCardProducts.module.css';

export default function OneCardProduct({ card }) {
  const basket = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(addBasketItemForUser({ id: card.id }));
  };
  const deleteItemHandler = () => {
    dispatch(deleteBasketItemForUser({ id: card.id }));
  };
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
      {basket.find((el) => el.product_id === card.id) ? (
        <>
          <span>Товар в корзине</span>
          <button onClick={addItemHandler} type="button">Добавить еще</button>
          <button onClick={deleteItemHandler} type="button">Удалить из корзины</button>
        </>
      )
        : (
          <button onClick={addItemHandler} type="button">Добавить в корзину</button>
        )}

    </div>
  );
}
