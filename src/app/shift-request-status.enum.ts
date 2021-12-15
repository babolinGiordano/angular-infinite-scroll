export enum ShiftRequestStatus {
    PENDING = 'PENDING',
    ACCEPTED = 'ACCEPTED',
    DECLINED = 'DECLINED'
}

export const ShiftRequestStatusOptions: Map<ShiftRequestStatus, string> = new Map([
    [ShiftRequestStatus.PENDING, 'shift-request.status.pending'],
    [ShiftRequestStatus.ACCEPTED, 'shift-request.status.accepted'],
    [ShiftRequestStatus.DECLINED, 'shift-request.status.declined'],
]);
