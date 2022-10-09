import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { ProductCard } from "../../components/ProductCard";
import { ProductDetails } from "../../store/reducers/productDetailsReducer";
import { StoreStateType } from "../../store/rootReducer";
import { AllProductsPageProps, AllProductsStateProps, ProductOwnProps } from "./interface";

class AllProductsPage extends React.Component<AllProductsPageProps> {

    renderAllProducts = () => {
        const { productDetails } = this.props;
        return productDetails.products.map(({title, variants, id}) => {
            return <ProductCard key={id} name = {title} url = {variants[0].id}/>;
        })
    }

    render() {
        return(
            <>
            <h1>All Prducts</h1>
            <div className="all-products-page-container">
                {this.renderAllProducts()}
            </div>
            </>
        );
    }
}

const mapStateToProps :  MapStateToProps<AllProductsStateProps, ProductOwnProps ,StoreStateType> = (state) => {
    return {
        productDetails : state.productDetails
    }
}

export default connect(mapStateToProps)(AllProductsPage);