import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import HomePage from './containers/HomePage';
import CheckoutPage from './containers/CheckoutPage';
import AllProductsPage from './containers/AllProductsPage';
import { ROUTE } from './constants/route';
import { HeaderNavigation } from './components/HeaderNavigation';
import { rootReducer } from './store/rootReducer';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchProductDetailsSaga } from './store/sagas/productDetailsSaga';
import ProductDetailsAction from './store/actions/productDetailsAction';
import startRootSaga from './store/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(startRootSaga);

store.dispatch({
  type: ProductDetailsAction.FETCH_PRODUCT_DETAILS
});

(window as any).shopspree = store;

function App() {
  return (
    <div className='app-container'>
      <Provider store={store}>
      <BrowserRouter>
        <HeaderNavigation/>
          <Routes>
            <Route path={ROUTE.CHECKOUT} element={<CheckoutPage/>}/>
            <Route path={ROUTE.ALL_PRODUCTS} element={<AllProductsPage/>}/>
            <Route path={ROUTE.HOME} element={<HomePage/>}/>
            <Route path='*' element={<Navigate to={ROUTE.HOME} replace />}/>
        </Routes>
      </BrowserRouter>
      </Provider>
   </div>
  );
}

export default App;
