export enum ImpactOnCleaningStatus {
    NO_IMPACT = 'NO_IMPACT',
    IS_CLEAN = 'IS_CLEAN',
    IS_DIRTY = 'IS_DIRTY'
}

export const ImpactOnCleaningStatusOptions: Map<ImpactOnCleaningStatus, string> = new Map([
    [ImpactOnCleaningStatus.NO_IMPACT, 'impact-on-cleaning-status.no-impact'],
    [ImpactOnCleaningStatus.IS_CLEAN, 'impact-on-cleaning-status.is-clean'],
    [ImpactOnCleaningStatus.IS_DIRTY, 'impact-on-cleaning-status.is-dirty']
]);
