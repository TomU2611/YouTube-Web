import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dropdown.css';

const Dropdown = ({ toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="btn" type="button" onClick={toggleDropdown}>
        <i className="bi bi-sliders" style={{ fontSize: '2rem', marginLeft: '-35px', padding: '5px'}}></i>
      </button>

      <div className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" onClick={toggleDropdown} aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-house-door"></i>
              <span className="w-70 m-2">Home</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-film"></i>
              <span className="w-70 m-2">Shorts</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-plus-square"></i>
              <span className="w-70 m-2">Subscriptions</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-youtube"></i>
              <span className="w-70 m-2">You</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-clock-history"></i>
              <span className="w-70 m-2">History</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i className="bi bi-music-note-beamed"></i>
              <span className="w-70 m-2">Music</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <i class="bi bi-plus-circle"></i>
              <span className="w-70 m-2">Add Video</span>
            </li>
            <li className="list-group-item d-flex justify-content align-items-center">
              <button onClick={toggleDarkMode} className="btn" style={{ background: 'none', border: 'none' }}>
                <i className="bi bi-cloud-moon"></i>
                <span className="w-70 m-2">Dark mode</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
