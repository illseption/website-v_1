import * as React from 'react';
import "../styles/index.scss";
import { Link } from 'gatsby';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="text-container">
        <Link to="/" style={{cursor: "pointer"}}>aman.</Link>
        <span className="arrows">&larr;</span>
        <span>/</span>
        <span className="arrows">&rarr;</span>
      </div>
    </div>
  )
};

export default SideBar;