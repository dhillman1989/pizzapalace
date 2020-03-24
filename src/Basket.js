import React, { Component } from 'react';
import './Basket.css';

class Basket extends Component {
    render() {
        const itemsMap = this.props.order.map(p=> <li><span className="alignleft">{p.product} {p.size}</span><span className="alignleft">{p.price}</span></li>);
        const accum = (acc, cur) => acc + cur.price;
        const totalCost = (this.props.order.reduce(accum, 0.00)).toFixed(2);
        const orderItems = !this.props.order[0] ? <p>Nothing here yet</p> : <div><div className="orderlist">{itemsMap}</div><span className="total">TOTAL: {totalCost}</span></div>;
        return (
            <div className="Basket" >
                <h2>Your Order</h2>
                <div className="Basket-container">
                    {orderItems}
                    <button>Place Your Order</button>
                </div>
            </div>

        );
    }
}

export default Basket;