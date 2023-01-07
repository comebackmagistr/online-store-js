import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from './navbar.module.css';
import { getUserLogout } from '../../redux/slices/userSlice';

export default function ButtonAppBar() {
  const user = useSelector((store) => store.user);
  const basket = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const clickOnLoglout = () => {
    dispatch(getUserLogout());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles.header_link} to="/">React-shop</Link>
          </Typography>
          {user.username ? (
            <>
              <span>
                Вы авторизованы как
                {' '}
                {user.username}
              </span>
              <Link to="/balance">
                <AccountBalanceWalletIcon />
                {' '}
                <span>
                  {user?.balance === null ? (
                    <>
                      0 рублей
                    </>
                  )
                    : (
                      <>
                        {user?.balance}
                        {' '}
                        рублей
                      </>
                    )}

                </span>
              </Link>
              <Link to="/basket">
                <AddShoppingCartIcon />
                {basket?.length > 0 ? (
                  <>
                    {basket?.length}
                    {' '}
                    товаров
                  </>
                )
                  : (
                    <>
                      0 товаров
                    </>
                  )}
              </Link>
              <button type="button" onClick={clickOnLoglout}>Выход</button>
            </>
          )
            : (
              <>
                <Link to="/registration">Регистрация</Link>
                <Link to="/login">Авторизация</Link>
              </>
            )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
