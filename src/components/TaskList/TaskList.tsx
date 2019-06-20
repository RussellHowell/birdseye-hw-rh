import * as React from 'react';

interface ITaskListProps {
    heading: string, 
    subheading?: string 
}

const TaskList: React.FunctionComponent<ITaskListProps> = (props) => {
  return(
      <div>
          task list
      </div>
  ) ;
};

export default TaskList;