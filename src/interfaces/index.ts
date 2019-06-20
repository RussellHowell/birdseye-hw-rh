/** External applications that generate tasks */
export enum TaskApplications {
    TRELLO = "Trello",
    GOOGLE_TASKS = "Google Tasks",
    /** unsupported/unknown external task app */
    OTHER = "OTHER"
}

export interface ITask {
    id: string,
    title: string, 
    scheduledTime:string,
    groupName:string,
    sourceApp?: TaskApplications,
    isComplete: boolean
}