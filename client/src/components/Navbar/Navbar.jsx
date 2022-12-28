import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Домой</Link></li>
        <li><Link to="/registration">Регистрация</Link></li>
        <li><Link to="/login">Авторизация</Link></li>
      </ul>
    </div>
  );
}
