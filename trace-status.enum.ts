export enum TraceStatus {
    ALL = '',
    RESOLVED = 'RESOLVED',
    NOT_RESOLVED = 'NOT_RESOLVED'
}

export const TraceStatusFilterOptions: Map<TraceStatus, string> = new Map([
    [TraceStatus.ALL, 'trace.statuses.all'],
    [TraceStatus.RESOLVED, 'trace.statuses.resolved'],
    [TraceStatus.NOT_RESOLVED, 'trace.statuses.not-resolved']
]);
export const TraceStatusOptions: Map<TraceStatus, any> = new Map([
    [TraceStatus.ALL, undefined],
    [TraceStatus.RESOLVED, true],
    [TraceStatus.NOT_RESOLVED, false]
]);
