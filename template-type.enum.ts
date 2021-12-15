export enum TaskTemplateType {
    DEFAULT = 'DEFAULT',
    CUSTOM = 'CUSTOM'
}

export const TaskTemplateTypeOptions: Map<TaskTemplateType, string> = new Map([
    [TaskTemplateType.DEFAULT, 'template-types.default'],
    [TaskTemplateType.CUSTOM, 'template-types.custom']
]);

export const TaskTemplateTypeIcons: Map<TaskTemplateType, string> = new Map([
    [TaskTemplateType.DEFAULT, 'hoxTemplateDefault'],
    [TaskTemplateType.CUSTOM, 'hoxTemplateCustom']
]);
