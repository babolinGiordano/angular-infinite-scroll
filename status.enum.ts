export enum Status {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export const StatusOptions: Map<Status, string> = new Map([
    [Status.ALL, 'common.all'],
    [Status.ACTIVE, 'common.active'],
    [Status.INACTIVE, 'common.inactive']
]);
