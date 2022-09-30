import { Axios, AxiosResponse } from 'axios';
import {takeLatest, call, put} from 'redux-saga/effects';
import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction from '../actions/productDetailsAction';
import { ProductDetails } from '../reducers/productDetailsReducer';

function* workerFetchProductDetailsSaga() {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {      
        const response : AxiosResponse = yield call(productDetailsAPI.getProducts);
        const productDetails = response.data as ProductDetails;

        yield put(productDetailsAction.set(productDetails));
    } catch(err) {
        //TODO: Change in future
        console.log(err);
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_PRODUCT_DETAILS, workerFetchProductDetailsSaga)
}