import * as React from 'react';
import { ITask } from '../../interfaces';
import { withTheme, makeStyles, createStyles, withStyles } from '@material-ui/styles';
import { Theme, Box, Typography, Button, List } from '@material-ui/core';
import { theme } from '../../Theme';
import { fontWeight } from '@material-ui/system';
import TaskListEntry from '../TaskListEntry/TaskListEntry';

interface ITaskListProps {
    heading: string, 
    subheading?: string 
    tasks: Array<ITask>
    onTaskListChange?: ( newTaskList: Array<ITask>) => void
    tabs?: Array<string> //this can be made more generic
    /** whether */
    showFinishedTasks?: boolean
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
    },
    root: {
        overflowY: 'scroll'
    },
    completedText: {
        height: TASK_LIST_ITEM_HEIGHT,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0,)',
        color: theme.palette.grey[600],
        
    }
}));

const CreateTaskButton = withStyles( (theme: Theme) => ({
    root:{
        height: TASK_LIST_ITEM_HEIGHT,
        color: theme.palette.secondary.dark,
        fontSize: theme.typography.pxToRem( 12 ),
        backgroundColor: theme.palette.secondary.light,
        // '&:hover':{
        //     backgroundColor: theme.palette.primary.light
        // }
    }
}))(Button)


/** @todo allow empty lists without error throwing  */
const TaskList: React.FunctionComponent<ITaskListProps> = (props) => {
    const classes = useStyles();
  return(
        <Box className={ classes.root } height='100%'>
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
            <List disablePadding={true}>
            {
                props.tasks.filter( task =>  !task.isComplete ).map( task => <TaskListEntry task={task} />)
            }
            </List>
            {
                props.showFinishedTasks && props.tasks.filter( task => task.isComplete ).length > 0 ? (
                    <Box width='100%'>
                        <Box className={ classes.completedText } width='100%'>
                            <Typography  align='center' display='block' variant={ 'subtitle1' }>
                                ----------  Completed   ---------- {/* figure out the proper way of doing this */} 
                            </Typography>
                        </Box>
                        <List disablePadding={true}>
                            {
                                props.tasks.filter( task => task.isComplete ).map( task => <TaskListEntry task={task} /> )
                            }
                        </List>
                    </Box>

                ) : undefined
            }
        </Box>
  ) ;
};

export default TaskList;