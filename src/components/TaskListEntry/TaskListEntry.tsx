import * as React from 'react';
import { ITask } from '../../interfaces/index';
import { ListItem, ListItemIcon, Checkbox, Typography, ListItemSecondaryAction, ListItemText, Theme } from '@material-ui/core';
import { makeStyles, createStyles  } from '@material-ui/styles'
import moment from 'moment';

interface ITaskListEntryProps {
    task: ITask
}



const TaskListEntry: React.FunctionComponent<ITaskListEntryProps> = (props) => {
    const useStyles = makeStyles( ( theme: Theme ) => createStyles({
        root: {
          height: theme.spacing(11),
          padding: theme.spacing(2),
          background: props.task.isComplete ? theme.palette.grey[200] : undefined
        },
        checkbox: {
          minWidth: theme.spacing(4)
        },
        groupName: {
            
          color: theme.palette.grey[600],
        },
        taskName: {
          color: theme.palette.common.black,
          textDecoration: props.task.isComplete ? 'line-through' : undefined
        },
        taskTime: {
          color: theme.palette.grey[700],
          float: 'right'
        }
      }));

    const classes = useStyles();
  return (
    <ListItem
      className={  classes.root  }
      divider={true}>
        <ListItemIcon className={ classes.checkbox }>
          <Checkbox 
            edge="start"
          />
        </ListItemIcon>
        <ListItemText 
        secondary={props.task.title}
        secondaryTypographyProps={ { variant: "h3", className: classes.taskName } }
        primary={props.task.groupName} 
        primaryTypographyProps={ { variant: "h5", className: classes.groupName } }/>
        <ListItemSecondaryAction className={ classes.taskTime }>
          <Typography 
          className={ classes.taskTime } 
          variant={ "h6" }> 
            Today 
          </Typography>
          <Typography 
          variant={ "h6" }> 
            { moment(props.task.scheduledTime).format("h:hh a") }
          </Typography>
        </ListItemSecondaryAction>
    </ListItem>
  ) ;
};

export default TaskListEntry;