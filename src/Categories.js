import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    render() {
        return (
            <div className="Categories" >
                <h2>Categories</h2> 
                    <div className="Categories-container">
                        <ul>
                            <li>Special Deals</li>
                            <li>Pizza</li>
                            <li>Kebabs</li>
                            <li>Chicken</li>
                            <li>Salads</li>
                            <li>Wraps</li>
                            <li>Sides</li>
                            <li>Drinks</li>
                        </ul>
                    </div>
            </div>

        );
    }
}

export default Categories;