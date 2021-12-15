
import { ConsumptionDTO } from './consumption.dto';
import { DateFormat } from './date-format.enum';
import { GuestDTO } from './guest.dto';
import { RateCodeDTO } from './rate-code.dto';
import { ReservationStatus } from './reservation-status.enum';
import { SpaceStatus } from './space-status.enum';
import { SpaceDTO } from './space.dto';


export class ReservationDTO {
    public id!: string;
    public space!: SpaceDTO;
    public hotelId!: string;
    public guest!: GuestDTO;
    public pmsId!: string;
    public adults!: number;
    public children!: number;
    public reservationStatus!: ReservationStatus;
    public arrival!: Date;
    public departure!: Date;
    public preciseArrival!: Date;
    public preciseDeparture!: Date;
    public rooms!: number;
    public countNights!: number;
    public countRemainingNights!: number;
    public dayUse!: boolean;
    public company!: string;
    public confirmationNumber!: string;
    public source!: string;
    public rateCode?: RateCodeDTO;
    public pmsUpdatedAt!: string;
    public vipCode!: string;
    public cxpCode!: string;
    public guaranteeCode!: string;
    public rtc!: string;
    public price!: number;
    public pmsCreatedAt!: Date;
    public pmsUpdatedBy!: string;
    public priceVisible!: boolean;
    public priceTaxIncluded!: boolean;
    public consumptions: ConsumptionDTO[] = [];

    public get reservationStatusLabel(): string {
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

            default:
                return '';
        }
    }

    public static getReservationStatusLabel(reservationStatus: string, preciseDeparture: Date, preciseArrival: Date): string {
        switch (reservationStatus) {
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

            default:
                return '';
        }
    }

    public get stayTime(): string {
        const arrivalDate = new Date(this.arrival);
        const departureDate = new Date(this.departure);
        return 'null'
    }

    public get guestName(): string {
        return this.guest?.fullName;
    }

    public get spaceName(): string {
        return this.space?.name;
    }

    public get spaceStatus(): SpaceStatus {
        return this.space?.status;
    }
}


