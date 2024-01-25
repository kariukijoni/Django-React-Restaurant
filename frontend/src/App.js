import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div id="main-wrapper" className="App">
      <Header/>
      <Sidebar/>
      <Dashboard/>
      <p>gg</p>
    </div>
  );
}

export default App;
