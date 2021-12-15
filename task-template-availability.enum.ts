export enum TaskTemplateAvailability {
    ALL = '',
    REPETITIVE = 'REPETITIVE',
    PUNCTUAL = 'PUNCTUAL'
}

export const TaskTemplateAvailabilityOptions: Map<TaskTemplateAvailability, string> = new Map([
    [TaskTemplateAvailability.ALL, 'task-template.types.repetitive-and-punctual'],
    [TaskTemplateAvailability.REPETITIVE, 'task-template.types.repetitive'],
    [TaskTemplateAvailability.PUNCTUAL, 'task-template.types.punctual']
]);
