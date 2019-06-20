import { ITask } from '../interfaces';
const moment = require('moment');
const json = require('./mock-data.json');


const loadMockTasks = (): Array<ITask> => {
    return json.map( (task: ITask) => {
        return {
            ...task,
            scheduledTime: moment().add(Math.floor(Math.random()*2), "days") 
        }
    } ) 
}

export { loadMockTasks }