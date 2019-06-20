import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { ITask } from '../../interfaces';
import TaskList from '../TaskList/TaskList';
import { TasksCarousel } from '../TasksCarousel/TasksCarousel';
import SearchBar from '../SearchBar/SearchBar';

interface ITasksDashboardProps {
  taskList: Array<ITask>
}

const TasksDashboard: React.FunctionComponent<ITasksDashboardProps> = (props) => {
  return( 
      <Row style={{ height: '100vh'}}> 
        <Col md={3}>
          <TaskList 
            heading="Tasks"/>
        </Col>
        <Col md={9}>
          <SearchBar/>
          <TasksCarousel />
        </Col>
      </Row>
  ) ;
};

export default TasksDashboard;