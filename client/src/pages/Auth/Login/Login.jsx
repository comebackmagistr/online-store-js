import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getLoginUserInfo } from '../../../redux/slices/userSlice';
import AuthInput from '../../../UI/AuthInput/AuthInput';

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(getLoginUserInfo(data));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          Никнейм
          <br />
          <AuthInput
            {...register('username', {
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 3,
                message: 'Никнейм должен быть не меньше 3х символов',
              },
            })}
            id="username"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="password">
          Пароль
          <br />
          <AuthInput
            {...register('password', {
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать не менее 6-ти символов, содержать буквы разного регистра и цифры',
              },
              pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
            })}
            id="password"
            type="text"
          />
        </label>
        <br />
        <button type="submit">Авторизация</button>
      </form>
    </div>
  );
}
