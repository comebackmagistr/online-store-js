import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserLogout } from '../../redux/slices/userSlice';
import styles from './navbar.module.css';

export default function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const clickOnLoglout = () => {
    dispatch(getUserLogout());
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">React-shop</Link>
      </div>
      <ul className={styles.nav__list}>
        <li><Link to="/">Домой</Link></li>
        {user.username
          ? (
            <>
              <span style={{ color: 'white' }}>
                Вы авторизованы как
                {' '}
                {user.username}
              </span>
              <button type="button" onClick={clickOnLoglout}>Выход</button>
            </>
          )
          : (
            <>
              <li><Link to="/registration">Регистрация</Link></li>
              <li><Link to="/login">Авторизация</Link></li>
            </>
          )}

      </ul>
    </nav>
  );
}
