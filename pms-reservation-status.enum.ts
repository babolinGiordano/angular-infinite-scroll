export enum PmsReservationStatus {
    RESERVED = 'RESERVED',
    CHECKED_IN = 'CHECKED_IN',
    CHECKED_OUT = 'CHECKED_OUT',
    NO_SHOW = 'NO_SHOW',
    CANCELLED = 'CANCELLED'
}

export const PmsReservationStatusOptions: Map<PmsReservationStatus, string> = new Map([
    [PmsReservationStatus.RESERVED, 'reservation.statuses.reserved'],
    [PmsReservationStatus.CHECKED_IN, 'reservation.statuses.checked-in'],
    [PmsReservationStatus.CHECKED_OUT, 'reservation.statuses.checked-out'],
    [PmsReservationStatus.NO_SHOW, 'reservation.statuses.no-show'],
    [PmsReservationStatus.CANCELLED, 'reservation.statuses.cancelled']
]);



