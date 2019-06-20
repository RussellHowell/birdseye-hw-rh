import * as React from 'react';
import { ITask } from '../../interfaces/index';

interface ITaskListEntryProps {
    task: ITask
}

const TaskListEntry: React.FunctionComponent<ITaskListEntryProps> = (props) => {
  return (
      <div>
          entry
      </div>
  ) ;
};

export default TaskListEntry;