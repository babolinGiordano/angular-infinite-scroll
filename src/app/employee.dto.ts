import { DepartmentDTO } from './departments.dto';
import { GroupDTO } from './groups.dto';
import { HotelChainDTO } from './hotel-chain.dto';
import { HotelDTO } from './hotel.dto';
import { Languages } from './languages.enum';
import { Role } from './role.enum';


export class EmployeeDTO {
    public id!: string;
    public pmsId!: string;
    public oneSignalId!: string;
    public groups!: GroupDTO[];
    public permissions!: string[];
    public firstName!: string;
    public lastName!: string;
    public fullName!: string;
    public email!: string;
    public language!: Languages;
    public department?: DepartmentDTO;
    public jobTitle!: string;
    public hotelChain!: HotelChainDTO;
    public hotels!: HotelDTO[];
    public lastHotel?: HotelDTO;
    public username!: string;
    public role!: Role;
    public lastSignInAt!: string;
    public lastChangePasswordAt!: string;
    public enabled!: boolean;
    public onDuty!: boolean;
    public passwordReset!: boolean;
    public passwordExpired!: boolean;
    public hotelId!: string;
}
