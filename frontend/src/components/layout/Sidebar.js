import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img src="assets/images/maggies.enc" alt="Maggies Deli" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">Maggies Deli</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">Avelyn</a>
                    </div>
                </div>
            
                <nav className="mt-2 d-flex">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                <i className="nav-icon fas fa-th"></i>
                                <p>
                                    Dashboard
                                </p>
                                </Link>
                            </li>
                        <li className="nav-item menu-open">
                            <Link to="#" className="nav-link">
                            <i className="nav-icon fas fa-clock"></i>
                            <p>
                                Orders
                                <i className="right fas fa-angle-left"></i>
                            </p>
                            </Link>
                            <ul className="nav nav-treeview ml-5">
                                <li className="nav-item">
                                    <Link to="/all-orders" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>All Orders</p>
                                    </Link>
                                    <Link to="/new-order" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>New Order</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item menu-open">
                            <Link to="#" className="nav-link">
                                <i className="nav-icon fas fa-cogs"></i>
                                <p>
                                    Settings
                                    <i className="right fas fa-angle-left"></i>
                                </p>
                            </Link>
                            <ul className="nav nav-treeview ml-4">
                                <li className="nav-item">
                                    <Link to="/restaurant-tables" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Tables</p>
                                    </Link>
                                    <Link to="/menu-item-list" className="nav-link">
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Menus</p>
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
