import React from 'react'
import { Link } from 'react-router-dom'
import 
{BsCart3, BsHouseHeartFill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import "./Sidebar.css"


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Grocery
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsHouseHeartFill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/products">
                    <BsFillArchiveFill className='icon'/> Products
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Customer">
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li>
        </ul>

    </aside>
  
  )
}

export default Sidebar