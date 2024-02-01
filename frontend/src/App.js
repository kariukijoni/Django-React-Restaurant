import React from 'react';
import './App.css';

// import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/layout/Dashboard';

// orders
import Orders from './components/orders/Orders';
import NewOrder from './components/orders/NewOrder';
import OrderDetails from './components/orders/OrderDetails';
import Payment from './components/orders/Payment';

// 
import Tables from './components/settings/AddRestaurantTable';
import AddRestaurantTable from './components/settings/AddRestaurantTable';
import MenuItemList from './components/menu/MenuItemList';
import AddMenuItem from './components/menu/AddMenuItem';

function App() {
  return (
    <Router>
      <div id="main-wrapper" className="App">
        <Header/>
        <Sidebar/>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}></Route>

            <Route exact path='/all-orders' element={<Orders/>}></Route>
            <Route exact path='/order/:id' element={<OrderDetails/>}></Route>
            {/* <Route exact path='/orders/:id' element={<Payment/>}></Route> */}
            <Route exact path='/new-order' element={<NewOrder/>}></Route>
            <Route exact path='/add-restaurant-table' element={<AddRestaurantTable/>}></Route>
            <Route exact path='/menu-item-list' element={<MenuItemList/>}></Route>
            <Route exact path='/add-menu-item-list' element={<AddMenuItem/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
