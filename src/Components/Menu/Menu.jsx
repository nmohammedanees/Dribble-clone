import React, { useState } from "react";
import "./Menu.css";
import { FaChevronDown } from "react-icons/fa"; 

const Menu = ({ sortOption, setSortOption,category,setCategory,tagsearch,setTagsearch }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const handleOptionClick = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };
  const handleTagSearchChange = (event) => {
    setTagsearch(event.target.value);
  };



  return (
    <div>
      <div className="menu-container">
        <div className="menu-dropdown">
          <button className="menu-button" onClick={toggleDropdown}>
            {sortOption} <FaChevronDown className="menu-dropdown-icon" />
          </button>
          {showDropdown && (
            <div className="menu-dropdown-content">
              <a onClick={() => handleOptionClick("Following")}>Following</a>
              <a onClick={() => handleOptionClick("Popular")}>Popular</a>
              <a onClick={() => handleOptionClick("NoteWorthy")}>
                Noteworthy
              </a>
            </div>
          )}
        </div>
        <div className="menu-list-container">
          <ul className="menu-list">
            <li className={`menu-item ${category === 'Discover' ? 'active' : ''}`} onClick={() => setCategory("Discover")}>Discover</li>
            <li className={`menu-item ${category === 'Animation' ? 'active' : ''}`} onClick={() => setCategory("Animation")}>Animation</li>
            <li className={`menu-item ${category === 'Branding' ? 'active' : ''}`} onClick={() => setCategory("Branding")}>Branding</li>
            <li className={`menu-item ${category === 'Illustration' ? 'active' : ''}`} onClick={() => setCategory("Illustration")}>Illustration</li>
            <li className={`menu-item ${category === 'Mobile' ? 'active' : ''}`} onClick={() => setCategory("Mobile")}>Mobile</li>
            <li className={`menu-item ${category === 'Print' ? 'active' : ''}`} onClick={() => setCategory("Print")}>Print</li>
            <li className={`menu-item ${category === 'Product Design' ? 'active' : ''}`} onClick={() => setCategory("Product Design")}>Product Design</li>
            <li className={`menu-item ${category === 'Typography' ? 'active' : ''}`} onClick={() => setCategory("Typography")}>Typography</li>
            <li className={`menu-item ${category === 'Web design' ? 'active' : ''}`} onClick={() => setCategory("Web design")}>Web design</li>
          </ul>
        </div>

        <button className="filter-button" onClick={toggleFilterDropdown}>
          Filters
        </button>
      </div>
      <div className={`filter-dropdown ${showFilterDropdown ? 'show' : ''}`}>

          <div className="filter-dropdown-inputs">
            <div className='filter-dropdown-sub'>
            <label htmlFor="" className="filter-dropdown-label">
              Tags
            </label>
            <input
              type="text"
              className="filter-dropdown-input"
              name="tags"
              placeholder="Search By tags"
              value={tagsearch}
              onChange={handleTagSearchChange}
            />

            </div>
            <div className='filter-dropdown-sub'>
            <label htmlFor="" className="filter-dropdown-label">
              Search By Color
            </label>
            <input
              type="text"
              className="filter-dropdown-input"
              name="tags"
              placeholder="Search By Color.."
            />
            </div>
          

          </div>
        </div>
      
    </div>
  );
};
export default Menu;

