import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin5">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav" className="p-t-30">
                        <li className="sidebar-item"> 
                            <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                            <i className="mdi mdi-receipt"></i>
                                <span className="hide-menu">Orders </span>
                            </a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <Link to="/all-orders" className="sidebar-link">
                                        <i className="mdi mdi-note-outline"></i>
                                        <span className="hide-menu"> All Orders </span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/new-order" className="sidebar-link">
                                        <i className="mdi mdi-note-plus"></i>
                                        <span className="hide-menu"> New Order </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                                <i className="mdi mdi-face"></i><span className="hide-menu">Settings </span></a>
                            <ul aria-expanded="false" className="collapse  first-level">
                                <li className="sidebar-item">
                                    <Link to="/add-restaurant-table" className="sidebar-link">
                                        <i className="mdi mdi-emoticon"></i>
                                        <span className="hide-menu"> Add Table </span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/menu-item-list" className="sidebar-link">
                                        <i className="mdi mdi-emoticon"></i>
                                        <span className="hide-menu"> Menu Items </span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
