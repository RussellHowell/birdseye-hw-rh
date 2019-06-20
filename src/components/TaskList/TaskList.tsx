import * as React from 'react';
import { ITask } from '../../interfaces';
import { withTheme, makeStyles, createStyles, withStyles } from '@material-ui/styles';
import { Theme, Box, Typography, Button } from '@material-ui/core';
import { theme } from '../../Theme';
import { fontWeight } from '@material-ui/system';
import TaskListEntry from '../TaskListEntry/TaskListEntry';

interface ITaskListProps {
    heading: string, 
    subheading?: string 
    tasks: Array<ITask>
    onTaskListChange?: ( newTaskList: Array<ITask>) => void
    tabs?: Array<string> //this can be made more generic
}

const TASK_LIST_ITEM_HEIGHT = theme.spacing( 11 );

const useStyles = makeStyles( ( theme: Theme ) => createStyles({
    headingBox: {
        textAlign: 'left',
        marginLeft: theme.spacing(6)
    },
    tabsBox: {
        marginTop: theme.spacing(6),
        height: theme.spacing(3)
        
    },
    heading: {
        margin: 0,
        color: theme.palette.primary.dark,
        fontWeight: theme.typography.fontWeightRegular,
        marginTop: theme.spacing(4)
    }
}));

const CreateTaskButton = withStyles( (theme: Theme) => ({
    root:{
        height: TASK_LIST_ITEM_HEIGHT,
        color: theme.palette.secondary.dark,
        fontSize: theme.typography.pxToRem( 12 ),
        backgroundColor: theme.palette.secondary.light,
        '&:hover':{
            backgroundColor: theme.palette.secondary.main
        }
    }
}))(Button)

const TaskList: React.FunctionComponent<ITaskListProps> = (props) => {
    const classes = useStyles();
  return(
        <Box>
            <Box className={ classes.headingBox }>
                <Typography variant={ 'h1' } className={ classes.heading }> 
                    { props.heading }
                </Typography>
            </Box>
            <Box className={ classes.tabsBox }>
                tabsBox
            </Box>
            <CreateTaskButton fullWidth={true}>
                + Create Task
            </CreateTaskButton>
            {
                props.tasks.map( task => <TaskListEntry task={task} />)
            }


        </Box>
  ) ;
};

export default TaskList;