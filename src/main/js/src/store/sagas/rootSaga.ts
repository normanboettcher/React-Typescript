import { watchProductDetailsSaga } from "./productDetailsSaga";
import {all} from 'redux-saga/effects';

export default function* startRootSaga() {
    yield all([
        watchProductDetailsSaga
    ]);
}