export enum ConsumptionStatus {
    ALL = 'ALL',
    UNPROCESSED = 'UNPROCESSED',
    PROCESSED = 'PROCESSED'
}

export const ConsumptionStatusOptions: Map<ConsumptionStatus, string> = new Map([
    [ConsumptionStatus.ALL, 'minibar.statuses.all'],
    [ConsumptionStatus.UNPROCESSED, 'minibar.statuses.tobe-processed'],
    [ConsumptionStatus.PROCESSED, 'minibar.statuses.processed'],
]);


