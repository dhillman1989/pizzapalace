import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }
    addItem(product, size, price) {
        this.props.add(product, size, price);
    }
    render() {
        const MenuItems = this.props.content.map(item =>
            <MenuItem item={item} add={this.addItem} />
        );
        return (
            <div className="Menu" >
                <h2>Pizzas</h2>
                <ul className="Menu-list" >
                    {MenuItems}
                </ul>
            </div>

        );
    }
}

export default Menu;