import React, { useState } from 'react';
import './Navbar.css';
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isFindDesignersOpen, setFindDesignersOpen] = useState(false);
  const [isCoursesOpen, setCoursesOpen] = useState(false);

  const toggleFindDesigners = () => setFindDesignersOpen(!isFindDesignersOpen);
  const toggleCourses = () => setCoursesOpen(!isCoursesOpen);

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li onMouseEnter={toggleFindDesigners} onMouseLeave={toggleFindDesigners}>
            Find Designers
            {isFindDesignersOpen && (
              <ul className="dropdown">
                <li>Freelancers</li>
                <li>Agencies</li>
                <li>Top Designers</li>
              </ul>
            )}
          </li>
          <li>Inspiration</li>
          <li onMouseEnter={toggleCourses} onMouseLeave={toggleCourses}>
            Courses
            {isCoursesOpen && (
              <ul className="dropdown">
                <li>Design Basics</li>
                <li>Advanced Techniques</li>
                <li>UX/UI Design</li>
              </ul>
            )}
          </li>
          <li>Jobs</li>
          <li>Go Pro</li>
        </ul>
      </div>
      <div className='logo'>
        <img src="./dribblelogo.png" alt="Dribbble Logo" />
      </div>
      <div className='navbar-right'>
        <div className="navbar-search-bar">
          <SearchIcon className="navbar-search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="navbar-search-input"
            value={inputValue}
            onChange={handleInputChange} // Update input value on change
            onKeyDown={handleKeyDown} // Check for Enter key press
          />
        </div>
        <img src="./vite.svg" alt="Profile" className="profile-circle" />
      </div>
    </nav>
  );
}

export default Navbar;
