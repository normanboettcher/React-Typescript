import React from "react";
import './style.css';

export const Partners : React.FC = () => {
    return (
        <div className="partners-container">
            <h2>Trusted by our Partners</h2>
            <div className="partners-list">
                <div className="partner-item amazon"></div>
                <div className="partner-item shopify"></div>
                <div className="partner-item wix"></div>
            </div>
        </div>
    );
}