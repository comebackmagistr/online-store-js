import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
  const user = useSelector((store) => store.user);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">React-shop</Link>
      </div>
      <ul className={styles.nav__list}>
        <li><Link to="/">Домой</Link></li>
        {user.username
          ? (
            <span>
              Вы авторизованы как
              {' '}
              {user.username}
            </span>
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
