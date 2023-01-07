import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneItemProduct from '../../components/OneItemProduct/OneItemProduct';
import { getAllBasketItemsForUser, submitBasketOrder } from '../../redux/slices/basketSlice';
import { getUserOrderSum } from '../../redux/slices/userSlice';

export default function Basket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBasketItemsForUser());
  }, []);
  const user = useSelector((store) => store.user);
  const basket = useSelector((store) => store.basket);
  const orderSum = basket.reduce((acc, item) => acc + item.Product.price, 0);
  const submitOrderHandler = () => {
    if (user.balance - orderSum > 0) {
      dispatch(submitBasketOrder());
      dispatch(getUserOrderSum({ sum: orderSum }));
    } else {
      alert('Недостаточно денег на счету');
    }
  };
  return (
    <div>
      {basket.length > 0 ? (
        <>
          {
          basket.map((el) => (
            <OneItemProduct key={el.id} item={el} />
          ))
}
          <br />
          <span>Сумма заказа:</span>
          {' '}
          {orderSum}
          <br />
          <button onClick={submitOrderHandler} type="button">Оформить заказ</button>
        </>
      )
        : (
          <span>В корзине ничего нет</span>
        )}
    </div>
  );
}
