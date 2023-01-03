import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { isAuth } from './redux/slices/userSlice';
import './styles/reset.css';
import Container from './UI/Container/Container';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isAuth());
  });
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <AppRouter />
      </Container>
    </BrowserRouter>
  );
}

export default App;
