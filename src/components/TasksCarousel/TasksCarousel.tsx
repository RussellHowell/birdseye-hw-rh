import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { ITask } from '../../interfaces/index';
import * as _ from 'lodash';
import moment from 'moment';
import TaskList from '../TaskList/TaskList';
import { Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';


export interface ITasksCarouselProps {
  tasks: Array<ITask>
}
const useStyles = makeStyles ( ( theme: Theme ) => createStyles({
}));

const MOMENT_FORMAT = "MMM D, YYYY"

export function TasksCarousel (props: ITasksCarouselProps) {
  const classes = useStyles();

  moment().calendar( undefined, )

  moment.updateLocale( 'en', {
    calendar: {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: '[Next Week]',
      lastDay: '[Yesterday]',
      lastWeek: '[Last Week]',
      sameElse: 'DD/MM/YYYY'
    }
  }
)

  const taskListsByDay = props.tasks.sort( (a, b) => {
        const aTime = moment(a.scheduledTime);
        const bTime = moment(b.scheduledTime);
        if( aTime.isBefore(bTime))  return -1 
        else if ( aTime.isAfter(bTime) ) return 1
        else return 0 
      } ).reduce( ( accum, task ) => {
        //put tasks into map wherein formatted month,day,year is key
        const dateString = moment(task.scheduledTime).format(MOMENT_FORMAT);
        return {
          ...accum,
          [dateString]: [ ..._.get(accum, dateString, []), task ]
        }
      }, {} as { [dateString: string]: Array<ITask> } )

  return (
    <Row>
      {
        
        _.keys(taskListsByDay).map( dateKey => (
          <Col md={8}>
            <TaskList 
            heading={ moment().calendar( moment( dateKey ) )} //figure out why this is saying yesterday for tomorrow
            subheading={ dateKey }
            tasks={ taskListsByDay[dateKey] }
            showFinishedTasks={true}
            />
          </Col>
        ))

      }
    </Row>
    );
}
