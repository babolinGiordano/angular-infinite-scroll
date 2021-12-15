export enum BreakfastStatus {
    INCLUDED = 'INCLUDED',
    NOT_INCLUDED = 'NOT_INCLUDED',
    CONFIRM_RATE_CODE = 'CONFIRM_RATE_CODE'
}

export const BreakfastStatusOptions: Map<BreakfastStatus, string> = new Map([
    [BreakfastStatus.INCLUDED, 'breakfast.statuses.included'],
    [BreakfastStatus.NOT_INCLUDED, 'breakfast.statuses.not-included'],
    [BreakfastStatus.CONFIRM_RATE_CODE, 'breakfast.statuses.confirm-rate-code']
]);

export const BreakfastStatusFilterOptions: Map<boolean | null, string> = new Map([
    [true, 'breakfast.statuses.included'],
    [false, 'breakfast.statuses.not-included']
]);

export const YesNoEmptyFilterOptions: Map<boolean | null, string> = new Map([
    [true, 'common.yes'],
    [false, 'common.no']
]);
