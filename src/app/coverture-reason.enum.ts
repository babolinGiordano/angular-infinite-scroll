// TODO: should depends on each hotel, should be configurable in backend side
export enum CovertureNotDoneReason {
    REFUSED_BY_GUEST = 'REFUSED_BY_GUEST',
    GUEST_IN_ROOM = 'GUEST_IN_ROOM',
    DND_ACTIVE = 'DND_ACTIVE'
}

export const CovertureNotDoneReasonOptions: Map<CovertureNotDoneReason, string> = new Map([
    [CovertureNotDoneReason.REFUSED_BY_GUEST, 'coverture.reasons.refused-by-guest'],
    [CovertureNotDoneReason.GUEST_IN_ROOM, 'coverture.reasons.guest-in-room'],
    [CovertureNotDoneReason.DND_ACTIVE, 'coverture.reasons.dnd-active']
]);


