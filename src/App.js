import React, { Component } from 'react';
import Navbar from './Navbar';
import Splash from './Splash';
import Menu from './Menu';
import MenuData from './MenuData';
import Basket from './Basket';
import Categories from './Categories';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menu: [], basket: [] };
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    this.setState({ menu: [...MenuData] });
  }
  add(product, size, price) {
    this.setState({ basket: [...this.state.basket, { product: product, size: size, price: price }] });
  }
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Splash />
        <div className="contentarea" >
          <Categories />
          <Menu content={this.state.menu} add={this.add}/>
          <Basket order={this.state.basket} />
        </div>
      </div>
    );
  }
}

export default App;

