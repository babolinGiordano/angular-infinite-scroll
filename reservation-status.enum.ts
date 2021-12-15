export enum ReservationStatus {
    RESERVED = 'RESERVED',
    ARRIVAL = 'ARRIVAL',
    CHECKED_IN = 'CHECKED_IN',
    STAY_OVER = 'STAY_OVER',
    DEPARTURE = 'DEPARTURE',
    CHECKED_OUT = 'CHECKED_OUT',
    NO_SHOW = 'NO_SHOW',
    CANCELLED = 'CANCELLED'
}

export const ReservationStatusOptions: Map<ReservationStatus, string> = new Map([
    [ReservationStatus.ARRIVAL, 'reservation.statuses.arrival'],
    [ReservationStatus.CHECKED_IN, 'reservation.statuses.checked-in'],
    [ReservationStatus.STAY_OVER, 'reservation.statuses.stay-over'],
    [ReservationStatus.DEPARTURE, 'reservation.statuses.departure'],
    [ReservationStatus.CHECKED_OUT, 'reservation.statuses.checked-out'],
    [ReservationStatus.NO_SHOW, 'reservation.statuses.no-show'],
    [ReservationStatus.CANCELLED, 'reservation.statuses.cancelled']
]);

export const ReservationStatusIcons: Map<ReservationStatus, string> = new Map([
    [ReservationStatus.RESERVED, 'hoxIn'],
    [ReservationStatus.ARRIVAL, 'hoxIn'],
    [ReservationStatus.CHECKED_IN, 'hoxIn'],
    [ReservationStatus.STAY_OVER, 'hoxStay'],
    [ReservationStatus.DEPARTURE, 'hoxOut'],
    [ReservationStatus.CHECKED_OUT, 'hoxOut'],
    [ReservationStatus.NO_SHOW, ''],
    [ReservationStatus.CANCELLED, '']
]);
