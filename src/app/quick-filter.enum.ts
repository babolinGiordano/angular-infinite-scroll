export enum QuickFilter {
    ALL = 'ALL',
    TODAY = 'TODAY',
    LAST_WEEK = 'LAST_WEEK',
    TOMORROW = 'TOMORROW',
    IN_2_DAYS = 'IN_2_DAYS'
}

export const QuickFilterOptions: Map<QuickFilter, string> = new Map([
    [QuickFilter.ALL, 'quick-filter.all'],
    [QuickFilter.TODAY, 'quick-filter.today'],
    [QuickFilter.LAST_WEEK, 'quick-filter.last-week']
]);

export const TaskAssignmentQuickFilterOptions: Map<QuickFilter, string> = new Map([
    [QuickFilter.TODAY, 'quick-filter.today'],
    [QuickFilter.TOMORROW, 'quick-filter.tomorrow'],
    [QuickFilter.IN_2_DAYS, 'quick-filter.in-2-days']

]);
