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
        <Col md={4} style={ { padding: 0 }}>
          <TaskList 
            tasks={ props.taskList }
            heading="Tasks"
            tabs={ ['All', 'Projects']}
            showFinishedTasks={false}/>
        </Col>
        <Col md={8} style={{ padding: 0 }}>
          <SearchBar/>
          <TasksCarousel tasks={ props.taskList } />
        </Col>
      </Row>
  ) ;
};

export default TasksDashboard;