export enum CleaningTask {
    DEPARTURE = 'Departure cleaning',
    DAY_USE = 'Day use cleaning',
    IN_HOUSE = 'In house cleaning',
    VACANT_CLEAN = 'Vacant clean cleaning',
    VACANT_DIRTY = 'Vacant dirty cleaning',
    QUICK_CHECK = 'Quick check',
    SANITIZATION = 'Sanitization'
}

export const CleaningTaskOptions: Map<CleaningTask, string> = new Map([
    [CleaningTask.DEPARTURE, 'task.cleaning-type.departure'],
    [CleaningTask.DAY_USE, 'task.cleaning-type.day-use'],
    [CleaningTask.IN_HOUSE, 'task.cleaning-type.in-house'],
    [CleaningTask.VACANT_CLEAN, 'task.cleaning-type.vacant-clean'],
    [CleaningTask.VACANT_DIRTY, 'task.cleaning-type.vacant-dirty'],
    [CleaningTask.QUICK_CHECK, 'task.cleaning-type.quick-check'],
    [CleaningTask.SANITIZATION, 'task.cleaning-type.sanitization']
]);
