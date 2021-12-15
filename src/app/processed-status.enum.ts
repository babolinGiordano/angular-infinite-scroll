export enum ProcessedStatus {
    PROCESSED = 'PROCESSED' as any,
    UNPROCESSED = 'UNPROCESSED' as any,
    ALL = 'ALL' as any,
}

export const ProcessedStatusOptions: Map<ProcessedStatus, string> = new Map([
    [ProcessedStatus.PROCESSED, 'quick-checkin.processed.status.processed'],
    [ProcessedStatus.UNPROCESSED, 'quick-checkin.processed.status.not-processed'],
    [ProcessedStatus.ALL, 'quick-checkin.processed.status.all'],
]);
