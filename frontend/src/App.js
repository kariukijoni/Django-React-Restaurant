import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/layout/Dashboard';

// orders
import Orders from './components/orders/Orders';
import NewOrder from './components/orders/NewOrder';

function App() {
  return (
    <Router>
      <div id="main-wrapper" className="App">
        <Header/>
        <Sidebar/>
          <Routes>
            <Route exact path='/' element={<Dashboard/>}></Route>

            <Route exact path='/all-orders' element={<Orders/>}></Route>
            <Route exact path='/new-order' element={<NewOrder/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
