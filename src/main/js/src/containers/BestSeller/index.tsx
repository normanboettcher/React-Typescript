import React from "react";
import { ProductCard } from "../../components/ProductCard";
import './style.css';

class BestSeller extends React.Component {
    render() {
        return (
            <div className="best-seller-container">
                <h2>Best Seller</h2>
                <div className="best-seller-products">
                    <ProductCard 
                    url="http://localhost:3000/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.PNG"
                    name="Formal Dress Shirts Casual Long Sleeve Slim Fit"/>
                    <ProductCard
                    url="http://localhost:3000/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.PNG"
                    name="Formal Dress Shirts Casual Short Sleeve Slim Fit"/>
                    <ProductCard
                    url="http://localhost:3000/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Black.PNG"
                    name="Soft Summer Short Slim Fit"/>
                </div>
            </div>
        );
    }
}

export default BestSeller;