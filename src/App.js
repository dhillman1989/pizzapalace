import React, {Component} from 'react';
import Navbar from './Navbar';
import Splash from './Splash';
import Menu from './Menu';
// import Basket from './Basket';
import Categories from './Categories';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Splash />
        <div className="contentarea" >
          <Categories/>
          <Menu category="pizza" />
        </div>
      </div>
    );
  }
}

export default App;

