export enum ReservationStates {
    EMPTY = 'EMPTY',
    AVAILABLE = 'AVAILABLE'
}

export const ReservationStatesOptions: Map<ReservationStates, string> = new Map([
    [ReservationStates.EMPTY, 'space.empty'],
    [ReservationStates.AVAILABLE, 'space.available']]);
