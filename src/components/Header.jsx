import React, { useState } from 'react';

import AppLogo from '../assets/todo.svg';

import './Header.scss';
import '../scss/_utillities.scss';
import '../scss/_material-button.scss';

function Header() {
  const [searchText, setSearchText] = useState('');

  const searchFunc = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="header">
      <div className="container flex justify-space-between align-center">
        {/* Left Side of he Header */}
        <div className="header-title flex justify-space-around align-center">
          <img className="header-logo" src={AppLogo} alt="" />
          <h3>MyTasks</h3>
        </div>

        {/* Middle section of the header */}
        <div className="header-search-field">
          <input
            className="header-search"
            value={searchText}
            onChange={(event) => searchFunc(event)}
            placeholder="Search"
            type="text"
            name="search-box"
            id="search-box"
          />
        </div>

        {/* Right side of the header */}
        <div className="header-controls">
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
