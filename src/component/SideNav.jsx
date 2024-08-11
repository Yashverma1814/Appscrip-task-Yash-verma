import React, { useState } from 'react';
import '../style/SideNav.css';

const SideNav = () => {
  const [dropdowns, setDropdowns] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns({
      ...dropdowns,
      [key]: !dropdowns[key],
    });
  };

  return (
    <div className="side-nav">
      <div className="side-nav-item">
        <label>
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
      </div>

      {renderDropdown('IDEAL FOR', 'idealFor', dropdowns.idealFor, toggleDropdown)}
      {renderDropdown('OCCASION', 'occasion', dropdowns.occasion, toggleDropdown)}
      {renderDropdown('WORK', 'work', dropdowns.work, toggleDropdown)}
      {renderDropdown('FABRIC', 'fabric', dropdowns.fabric, toggleDropdown)}
      {renderDropdown('SEGMENT', 'segment', dropdowns.segment, toggleDropdown)}
      {renderDropdown('SUITABLE FOR', 'suitableFor', dropdowns.suitableFor, toggleDropdown)}
      {renderDropdown('RAW MATERIALS', 'rawMaterials', dropdowns.rawMaterials, toggleDropdown)}
      {renderDropdown('PATTERN', 'pattern', dropdowns.pattern, toggleDropdown)}
    </div>
  );
};

const renderDropdown = (title, key, isOpen, toggleDropdown) => (
  <div className="side-nav-item">
    <label onClick={() => toggleDropdown(key)}>
      {title}
      <span className={`chevron ${isOpen ? 'rotate' : ''}`}>v</span>
    </label>
    <div className={`side-nav-dropdown-content ${isOpen ? 'open' : ''}`}>
      <span>All</span>
    </div>
    {key=="idealFor"?
    <div>
        <button className='selectBtn'>Unselect all</button>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="men" name="category" value="men" />
            <label htmlFor="men" style={{ marginLeft: '10px' }}>Men</label>
        </li>
        <li style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="women" name="category" value="women" />
            <label htmlFor="women" style={{ marginLeft: '10px' }}>Women</label>
        </li>
        <li style={{ marginBottom: '10px' }}>
            <input type="checkbox" id="baby-kids" name="category" value="baby-kids" />
            <label htmlFor="baby-kids" style={{ marginLeft: '10px' }}>Baby & Kids</label>
        </li>
        </ul>
    </div>:""}
  </div>
);

export default SideNav;