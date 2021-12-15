export enum LostAndFoundStatus {
    DECLARED = 'DECLARED',
    REGISTERED = 'REGISTERED',
    DELIVERED = 'DELIVERED',
    DELETED = 'DELETED'
}

export const LostAndFoundStatusOptions: Map<LostAndFoundStatus, string> = new Map([
    [LostAndFoundStatus.DECLARED, 'lost-and-found.statuses.declared'],
    [LostAndFoundStatus.REGISTERED, 'lost-and-found.statuses.registered'],
    [LostAndFoundStatus.DELIVERED, 'lost-and-found.statuses.delivered'],
    [LostAndFoundStatus.DELETED, 'lost-and-found.statuses.deleted']
]);
