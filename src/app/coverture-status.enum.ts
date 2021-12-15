export enum CovertureStatus {
    DEFAULT = 'DEFAULT',
    COVERTURE_DONE = 'COVERTURE_DONE',
    COVERTURE_NOT_DONE = 'COVERTURE_NOT_DONE'
}

export const CovertureStatusOptions: Map<CovertureStatus, string> = new Map([
    [CovertureStatus.DEFAULT, 'coverture.statuses.default'],
    [CovertureStatus.COVERTURE_DONE, 'coverture.statuses.coverture-done'],
    [CovertureStatus.COVERTURE_NOT_DONE, 'coverture.statuses.coverture-not-done']
]);


