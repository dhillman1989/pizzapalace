import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return (
        <div className="Navbar">
            <nav>
                <h2>Pizza Palace</h2>
                <ul className="Navbar-list">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Find Us</li>
                    <li>Contact</li>
                    <li><i className="fas fa-shopping-cart"></i></li>
                    <li><i className="fas fa-bars"></i></li>
                </ul>
            </nav>
        </div>
        );
        }
}

export default Navbar;