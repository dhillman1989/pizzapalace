import React, { Component } from 'react';
import "./MenuItem.css";

class MenuItem extends Component {
    constructor(props){
        super(props);
        this.addItemHandler = this.addItemHandler.bind(this);
    }
    addItemHandler(product, size, price){
        this.props.add(product, size, price);
    }  
    render() {
        return (
            <li className="MenuItem">
                <div>
                    <span className="product"> {this.props.item.product} </span>
                    {this.props.item.desc}
                </div>
                <div className="price-size-col">

                    {this.props.item.prices.map(price =>
                        <div className="ind-price">
                            <span className="size" >{price.size}</span>
                            <span className="price" > {price.price} </span><button className="addbtn" onClick={() => this.addItemHandler(this.props.item.product, price.size, price.price)}>+</button>
                        </div>
                    )}
                </div>
            </li>

        );
    }
}

export default MenuItem;

