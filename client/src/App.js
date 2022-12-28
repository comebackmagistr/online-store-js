import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import './styles/reset.css';
import Container from './UI/Container/Container';

function App() {
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
