import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OneItemProduct from '../../components/OneItemProduct/OneItemProduct';
import { getAllBasketItemsForUser } from '../../redux/slices/basketSlice';

export default function Basket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBasketItemsForUser());
  }, []);
  const basket = useSelector((store) => store.basket);
  return (
    <div>
      {basket.map((el) => (
        <OneItemProduct key={el.id} item={el} />
      ))}
    </div>
  );
}
