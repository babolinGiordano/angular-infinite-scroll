export enum DayOfWeek {
    MON = 'MONDAY',
    TUE = 'TUESDAY',
    WED = 'WEDNESDAY',
    THU = 'THURSDAY',
    FRI = 'FRIDAY',
    SAT = 'SATURDAY',
    SUN = 'SUNDAY',
}

export const DayOfWeekOptions: Map<DayOfWeek, string> = new Map([
    [DayOfWeek.MON, 'day-of-week.mon'],
    [DayOfWeek.TUE, 'day-of-week.tue'],
    [DayOfWeek.WED, 'day-of-week.wed'],
    [DayOfWeek.THU, 'day-of-week.thu'],
    [DayOfWeek.FRI, 'day-of-week.fri'],
    [DayOfWeek.SAT, 'day-of-week.sat'],
    [DayOfWeek.SUN, 'day-of-week.sun']
]);
