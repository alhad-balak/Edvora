import './App.css';
import Dashboard from './components/layout/Dashboard';
import Navbar from './components/layout/Navbar';
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Dashboard />
      <Navbar />
    </Router>
  );
}

export default App;
