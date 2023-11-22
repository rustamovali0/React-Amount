import React, { useState } from 'react';

const Navbar = () => {
 
  

  return (
    <div>
      <nav className='navbar'>
        <div className="container-fluid">
          <a className="navbar-brand">Senior.az</a>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkLightSwitch"
              // checked={isDarkMode}
              // onChange={toggleDarkMode}
              style={{ transform: 'scale(1.6)' }} 

            />
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
