export enum TaskStatus {
    DONE = 'DONE',
    NOT_DONE = 'NOT_DONE',
    NOT_DONE_AUTOMATICALLY = 'NOT_DONE_AUTOMATICALLY',
    INSPECTED = 'INSPECTED'
}

export const TaskStatusOptions: Map<TaskStatus, string> = new Map([
    [TaskStatus.DONE, 'task.statuses.to-assign'],
    [TaskStatus.NOT_DONE, 'task.statuses.to-do'],
    [TaskStatus.NOT_DONE_AUTOMATICALLY, 'task.statuses.inactive'],
    [TaskStatus.INSPECTED, 'task.statuses.in-progress']
]);
