export enum TaskInspectAction {
    APPROUVED = 'APPROUVED',
    DISAPPROUVED = 'DISAPPROUVED'
}

export const TaskInspectActionOptions: Map<TaskInspectAction, string> = new Map([
    [TaskInspectAction.APPROUVED, 'task.inspect.actions.approved'],
    [TaskInspectAction.DISAPPROUVED, 'task.inspect.actions.disapproved']
]);


