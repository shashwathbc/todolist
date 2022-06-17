import React from 'react';
import "./sidebar.css";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">TO-DO-LISTS</h3>
        <ul className="sidebarList">
          <Link to="/" className="link">
          <li className="sidebarListItem ">
            Today   
            <span>5</span>
          </li>
          </Link>
          <Link to="/tomorrow" className='link'>
          <li className="sidebarListItem ">
            Tomorrow
            <span>5</span>
          </li>
          </Link>
          <li className="sidebarListItem">
             Overdue
             <span>5</span>
          </li>

          <li className="sidebarListItem">
             ---------------
            </li>

          <li className="sidebarListItem">
            Personal
            <span>5</span>
          </li>
          <li className="sidebarListItem">
            Home
            <span>5</span>
          </li>
          <li className="sidebarListItem">
            Office
            <span>5</span>
          </li>
          <li className="sidebarListItem">
            Travel
            <span>5</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default SideBar