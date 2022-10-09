import  {ProductDetails } from "../../store/reducers/productDetailsReducer";
import { RouteComponentProps } from "react-router-dom";

export type AllProductsStateProps = {
    productDetails : ProductDetails;
}

export interface ProductOwnProps extends RouteComponentProps {}

export type AllProductsPageProps = AllProductsStateProps & ProductOwnProps


