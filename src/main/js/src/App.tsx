import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
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
import { composeWithDevTools } from '@redux-devtools/extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
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
          <Switch>
            <Route exact component={CheckoutPage} path = {ROUTE.CHECKOUT}/>
            <Route exact component = {AllProductsPage}path={ROUTE.ALL_PRODUCTS}/>
            <Route exact component={HomePage} path={ROUTE.HOME}/>
            <Redirect to = "/"/>
        </Switch>
      </BrowserRouter>
      </Provider>
   </div>
  );
}

export default App;
