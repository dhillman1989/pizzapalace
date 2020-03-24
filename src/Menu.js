import React, { Component } from 'react';
import MenuData from './MenuData.json';
import MenuItem from './MenuItem';
import Basket from "./Basket";
import './Menu.css';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {menu: [], basket: []};
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount(){
        this.setState({menu: [...MenuData]});
    }
    addItem(product, size, price){
        this.setState({basket: [...this.state.basket, {product: product, size: size, price: price}]});
    }
    render() {
        const MenuItems = this.state.menu.map(item => 
            <MenuItem item={item} add={this.addItem}/>
        );
        return (
            <div className="Menu" >
                <h2>Pizzas</h2>
                <ul className="Menu-list" >
                {MenuItems}
                   
                </ul> 
                <Basket order = {this.state.basket}/>
            </div>
            
        );
    }
}

export default Menu;