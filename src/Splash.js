import React, {Component} from 'react';
import './Splash.css';

class Splash extends Component {
    render(){
        return (
        <div className="Splash">
            <div className="Splash-container">
                <h1>Buy One, Get one Free</h1>
                <p>on 12" Pizzas everyday from 6pm</p>
                <button>View Our Full Menu</button>
            </div>
        </div>
        );
        }
}

export default Splash;