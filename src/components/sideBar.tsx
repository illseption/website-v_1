import * as React from 'react';
import "../styles/index.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="text-container">
        <span>aman.</span>
        <span className="arrows">&larr;</span>
        <span>/</span>
        <span className="arrows">&rarr;</span>
      </div>
    </div>
  )
};

export default SideBar;