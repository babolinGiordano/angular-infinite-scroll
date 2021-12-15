import { EmployeeDTO } from './employee.dto';
import { ProductTypeDTO } from './product-type.dto';
import { ReservationDTO } from './reservation.dto';
import { SpaceDTO } from './space.dto';


export class ConsumptionDTO {
    public id!: string;
    public space!: SpaceDTO;
    public reservation!: ReservationDTO;
    public productType!: ProductTypeDTO;
    public unprocessed!: number;
    public processed!: number;
    public offered!: number;
    public lost!: number;
    public consumptionDate!: Date;
    public reportedBy?: EmployeeDTO;
    public reportedAt?: Date;

    public get nbr(): number {
        return this.processed + this.unprocessed;
    }

    public get spaceName(): string {
        return this.space?.name;
    }

    public get reportedByName(): string {
        return this.reportedBy?.fullName || '';
    }

    public get productTypeName(): string {
        return this.productType?.name;
    }
}
