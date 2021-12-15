export enum TaskQuickCheckAction {
    ROOM_IS_CLEAN = 'ROOM_IS_CLEAN',
    ROOM_IS_DIRTY = 'ROOM_IS_DIRTY'
}

export const TaskQuickCheckActionOptions: Map<TaskQuickCheckAction, string> = new Map([
    [TaskQuickCheckAction.ROOM_IS_CLEAN, 'task.quickcheck.room-clean'],
    [TaskQuickCheckAction.ROOM_IS_DIRTY, 'task.quickcheck.room-dirty']
]);


