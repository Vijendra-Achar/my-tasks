import React from 'react';

import AppLogo from '../assets/todo.svg';

import './Header.scss';
import '../scss/_utillities.scss';

function Header() {
  return (
    <div className="header">
      <div className="container flex justify-space-between align-center">
        <div className="header-title flex justify-space-around align-center">
          <img className="header-logo" src={AppLogo} alt="" />
          <h3>MyTasks</h3>
        </div>
        <div className="header-controls">
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
