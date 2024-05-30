import React, { useState } from 'react';
import './Dropdown.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" style={{ float: 'left' }}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        onClick={toggleDropdown}
      >
        settings
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  );
};

export default Dropdown;
