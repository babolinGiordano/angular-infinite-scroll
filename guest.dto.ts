
import { GuestNoteDTO } from './guest-note.dto';
import StringUtils from './helpers/string-utils';
import { ReservationDTO } from './reservation.dto';


export class GuestDTO {
    public id!: string;
    public pmsId!: string;
    public salutation!: string;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public lastReservation!: ReservationDTO;
    public nextReservation!: ReservationDTO;
    public nationality!: string;
    public language!: string;
    public phone!: string;
    public imageURL!: string;
    public guestNotes!: GuestNoteDTO[];

    public get hasNotes(): boolean {
        return this.guestNotes?.length > 0;
    }

    public get fullName(): string {
        return StringUtils.checkGuestFullName(this.firstName, this.lastName);
    }

    public static getFullName(firstName: string, lastName: string): string {
        return StringUtils.checkGuestFullName(firstName, lastName);
    }

    // public getHasNotes(guestNotes): boolean {
    //     return this.guestNotes?.length > 0;
    // }
}
