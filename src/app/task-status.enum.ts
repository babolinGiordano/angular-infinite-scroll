export enum TaskStatus {
    TO_ASSIGN = 'TO_ASSIGN',
    TO_DO = 'TO_DO',
    INACTIVE = 'INACTIVE',
    IN_PROGRESS = 'IN_PROGRESS',
    TO_INSPECT = 'TO_INSPECT',
    CLOSED_INSPECTED = 'CLOSED_INSPECTED',
    CLOSED_NOT_DONE = 'CLOSED_NOT_DONE',
    CLOSED_NOT_DONE_AUTOMATICALLY = 'CLOSED_NOT_DONE_AUTOMATICALLY',
    CLOSED_DONE = 'CLOSED_DONE',
    PAUSED = 'PAUSED'
}

export const TaskStatusNotEditable: TaskStatus[] =
    [
        TaskStatus.CLOSED_DONE,
        TaskStatus.CLOSED_INSPECTED,
        TaskStatus.CLOSED_NOT_DONE,
        TaskStatus.TO_INSPECT
    ];


export const TaskStatusOptions: Map<TaskStatus, string> = new Map([
    [TaskStatus.TO_ASSIGN, 'task.statuses.to-assign'],
    [TaskStatus.TO_DO, 'task.statuses.to-do'],
    [TaskStatus.INACTIVE, 'task.statuses.inactive'],
    [TaskStatus.IN_PROGRESS, 'task.statuses.in-progress'],
    [TaskStatus.TO_INSPECT, 'task.statuses.to-inspect'],
    [TaskStatus.CLOSED_INSPECTED, 'task.statuses.inspected'],
    [TaskStatus.CLOSED_NOT_DONE, 'task.statuses.closed-not-done'],
    [TaskStatus.CLOSED_DONE, 'task.statuses.closed-done'],
    [TaskStatus.PAUSED, 'task.statuses.paused']
]);

export const TaskStatusIconsOptions: Map<TaskStatus, string> = new Map([
    [TaskStatus.TO_ASSIGN, 'hoxTaskToAssign'],
    [TaskStatus.TO_DO, 'hoxTaskToDo'],
    [TaskStatus.INACTIVE, 'hoxTaskInactive'],
    [TaskStatus.IN_PROGRESS, 'hoxTaskInProgress'],
    [TaskStatus.TO_INSPECT, 'hoxInspection'],
    [TaskStatus.CLOSED_INSPECTED, 'hoxInspection'],
    [TaskStatus.CLOSED_NOT_DONE, 'hoxTaskNotDone'],
    [TaskStatus.CLOSED_DONE, 'hoxTaskDone'],
    [TaskStatus.PAUSED, 'hoxPause']
]);
