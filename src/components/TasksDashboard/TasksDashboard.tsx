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
        <Col md={4}>
          <TaskList 
            tasks={ props.taskList }
            heading="Tasks"
            showFinishedTasks={true}/>
        </Col>
        <Col md={8}>
          <SearchBar/>
          <TasksCarousel />
        </Col>
      </Row>
  ) ;
};

export default TasksDashboard;