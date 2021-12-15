export enum QualityAssuranceResultStatus {
    APPROVED = 'APPROVED',
    DISAPPROVED = 'DISAPPROVED',
    NA = 'NA'
}

export const QualityAssuranceResultStatusOptions: Map<QualityAssuranceResultStatus, string> = new Map([
    [QualityAssuranceResultStatus.APPROVED, 'quality-control.statuses.approved'],
    [QualityAssuranceResultStatus.DISAPPROVED, 'quality-control.statuses.disapproved'],
    [QualityAssuranceResultStatus.NA, 'quality-control.statuses.na']
]);
