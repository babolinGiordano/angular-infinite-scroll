import { HotelDTO } from "./hotel.dto";


export class RateCodeDTO {
    public id!: string;
    public hotel!: HotelDTO;
    public code!: string;
    public description!: string;
    public breakfast!: boolean;
    public unknown!: boolean;
    public enabled!: boolean;
    public residence!: boolean;
}
