import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getUserLogout } from '../../redux/slices/userSlice';
import styles from './navbar.module.css';

export default function ButtonAppBar() {
  const user = useSelector((store) => store.user);
  const basket = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const clickOnLoglout = () => {
    dispatch(getUserLogout());
  };
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles.header_link} to="/">React-shop</Link>
          </Typography>
          {user.username ? (
            <>
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
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={basket?.length} color="error">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              <Avatar sx={{ bgcolor: red[900] }}>{user.username[0]}</Avatar>
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
