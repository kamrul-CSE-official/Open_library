import React from 'react';
import './Header.css';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    return (
        <div className="contaner">
          
            <nav>
      <input type="checkbox" className="check" />
      {/* <input type="checkbox" className="check"> */}
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">BookFinder</label>
      <ul>
        <li><a className="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
      </ul>
    </nav>            
      </div>
      
    );
};

export default Header;