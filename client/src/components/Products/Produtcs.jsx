import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/slices/productSlice';

export default function Produtcs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const products = useSelector((store) => store.products);
  console.log(products);
  return (
    <div>
      {products.length > 0
        ? (
          <>
            {products.map((el) => (
              <div key={el.id}>
                {el.title}
                {el.about}
                {el.price}
              </div>
            ))}
          </>
        )
        : (
          <div>Loading</div>
        )}

    </div>
  );
}
