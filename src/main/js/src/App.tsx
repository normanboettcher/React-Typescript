import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './containers/HomePage';
import CheckoutPage from './containers/CheckoutPage';
import AllProductsPage from './containers/AllProductsPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';


function App() {
  return (
    <div className='app-container'>
   <BrowserRouter>
   <HeaderNavigation/>
    <Routes>
      <Route path={ROUTE.CHECKOUT} element={<CheckoutPage/>}/>
      <Route path={ROUTE.ALL_PRODUCTS} element={<AllProductsPage/>}/>
      <Route path={ROUTE.HOME} element={<HomePage/>}/>
      <Route path='*' element={<Navigate to={ROUTE.HOME} replace />}/>
    </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
