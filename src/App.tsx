import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginLanding from './components/LoginLanding/LoginLanding';
import TasksDashboard from './components/TasksDashboard/TasksDashboard';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './Theme';
import { loadMockTasks } from './mock/loader';

const App: React.FC = () => {
  const loadedTasks = loadMockTasks();

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
        <Router>
          {/* <Route path='/' exact component={ LoginLanding } /> */}
          <Route path='/'  exact render={ ( props ) => <TasksDashboard  taskList={ loadedTasks }/> } />
          <Route 
          path='/dashboard/' 
          render={ ( props ) => <TasksDashboard  taskList={ loadedTasks }/> }/>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
