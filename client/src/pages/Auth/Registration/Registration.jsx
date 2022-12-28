import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getRegistrationUserInfo } from '../../../redux/slices/userSlice';

export default function Registration() {
  const {
    register,
    formState: {
      errors, isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(getRegistrationUserInfo(data));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Никнейм
          <input
            id="username"
            {...register('username', {
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 3,
                message: 'Никнейм должен быть не меньше 3х символов',
              },
            })}
            type="text"
          />
          <div>{errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}</div>
        </label>
        <label htmlFor="email">
          Почта
          <input
            id="email"
            {...register('email', {
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 6,
                message: 'Почта должен быть не меньше 6х символов',
              },
              pattern: /.+@.+\..+/i,
            })}
            type="text"
          />
          <div>{errors?.email && <p>{errors?.email?.message || 'Введите корректный адрес почты!'}</p>}</div>
        </label>
        <label htmlFor="email">
          Пароль
          <input
            id="password"
            {...register('password', {
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать не менее 6-ти символов, содержать буквы разного регистра и цифры',
              },
              pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
            })}
            type="text"
          />
          <div>{errors?.password && <p>{errors?.password?.message || 'Пароль должен содержать буквы разного регистра и цифры!'}</p>}</div>
        </label>
        <button type="submit" disabled={!isValid}>Регистрация</button>
      </form>
    </div>
  );
}
