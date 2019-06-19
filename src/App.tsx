import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginLanding from './components/LoginLanding/LoginLanding';
import TasksDashboard from './components/TasksDashboard/TasksDashboard';


const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={ LoginLanding } />
        <Route path='/dashboard/' component={ TasksDashboard }/>
      </Router>
    </div>
  );
}

export default App;
