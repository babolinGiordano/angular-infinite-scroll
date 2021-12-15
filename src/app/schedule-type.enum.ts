export enum ScheduleType {
    FULL = 'FULL',
    HALF = 'HALF',
    SPLIT = 'SPLIT',
    OFF = 'OFF'
}

export const ScheduleTypeOptions: Map<ScheduleType, string> = new Map([
    [ScheduleType.FULL, 'shift-type.schedule-type.full'],
    [ScheduleType.HALF, 'shift-type.schedule-type.half'],
    [ScheduleType.SPLIT, 'shift-type.schedule-type.split'],
    [ScheduleType.OFF, 'shift-type.schedule-type.off']
]);

export const ScheduleTypeIcons: Map<ScheduleType, string> = new Map([
    [ScheduleType.FULL, 'hoxFullProgress'],
    [ScheduleType.HALF, 'hoxHalfDayProgress'],
    [ScheduleType.SPLIT, 'hoxSplitProgress'],
    [ScheduleType.OFF, 'hoxNotWorkingProgress']
]);
