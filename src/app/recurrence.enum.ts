export enum Recurrence {
    ALL = '',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR'
}

export const RecurrenceOptions: Map<Recurrence, string> = new Map([
    [Recurrence.DAY, 'recurrence.day'],
    [Recurrence.WEEK, 'recurrence.week'],
    [Recurrence.MONTH, 'recurrence.month'],
    [Recurrence.YEAR, 'recurrence.year']
]);

export const RecurrenceFilterOptions: Map<Recurrence, string> = new Map([
    [Recurrence.ALL, 'common.all'],
    [Recurrence.DAY, 'recurrence.every-day'],
    [Recurrence.WEEK, 'recurrence.every-week'],
    [Recurrence.MONTH, 'recurrence.every-month'],
    [Recurrence.YEAR, 'recurrence.every-year']
]);
