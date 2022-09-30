import { ProductDetails } from "../reducers/productDetailsReducer";

export interface ProductDetailsSetAction {
    type : typeof ProductDetailsAction.SET_PRODUCT_DETAILS;
    productDetails : ProductDetails;
}

export interface ProductDetailsFetchAction {
    type : typeof ProductDetailsAction.FETCH_PRODUCT_DETAILS;
}

export type ProductDetailsReducerAction = ProductDetailsSetAction | ProductDetailsFetchAction;

class ProductDetailsAction {
    static readonly FETCH_PRODUCT_DETAILS = 'FETCH_PRODUCTS_DETAILS';
    static readonly SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

    fetch = () : ProductDetailsFetchAction => {
        return {
            type : ProductDetailsAction.FETCH_PRODUCT_DETAILS
        }
    }

    set = (productDetails : ProductDetails) : ProductDetailsSetAction => {
        return {
            type : ProductDetailsAction.SET_PRODUCT_DETAILS,
            productDetails
        }
    }
}

export default ProductDetailsAction;