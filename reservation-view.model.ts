
import { DateFormat } from './date-format.enum';
import { ReservationStatus } from './reservation-status.enum';
import { ReservationDTO } from './reservation.dto';


export class ReservationViewModel {

    constructor(dto?: ReservationDTO) {
        if (dto) {
            this.id = dto?.id;
            this.reservationStatus = dto?.reservationStatus;
            this.preciseDeparture = dto?.preciseDeparture;
            this.preciseArrival = dto?.preciseArrival;
            this.reservationStatusLabel = this.mapReservationStatusLabel();
        }
    }

    public id?: string;
    public reservationStatus?: string;
    public preciseDeparture?: Date;
    public preciseArrival?: Date;
    public reservationStatusLabel?: string;

    private mapReservationStatusLabel(): string {
        switch (this.reservationStatus) {
            case ReservationStatus.CHECKED_OUT:
                return 'reservation.out';
            case ReservationStatus.CHECKED_IN:
                return 'reservation.in';
            case ReservationStatus.STAY_OVER:
                return 'reservation.stay';
            case ReservationStatus.NO_SHOW:
                return 'reservation.no-show';
            case ReservationStatus.CANCELLED:
                return 'reservation.statuses.cancelled';
            case ReservationStatus.RESERVED:
                return 'reservation.statuses.reserved';
            case ReservationStatus.DEPARTURE:
                return this.getPreciseDeparture();
            case ReservationStatus.ARRIVAL:
                return this.getPreciseArrival();
            default:
                return '';
        }
    }

    private getPreciseArrival() {
        return '-';
    }

    private getPreciseDeparture() {
        return '-';
    }
}
