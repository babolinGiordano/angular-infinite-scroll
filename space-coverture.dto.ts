import { CovertureNotDoneReason } from './coverture-reason.enum';
import { CovertureStatus } from './coverture-status.enum';
import { EmployeeDTO } from './employee.dto';


export class SpaceCovertureDTO {

    public id!: string;
    public covertureStatus!: CovertureStatus;
    public covertureReason!: CovertureNotDoneReason;
    public reportedBy!: EmployeeDTO;
    public reportedAt!: Date;

    public get covertureIcon(): string | null {
        if (this.covertureStatus === CovertureStatus.COVERTURE_NOT_DONE) {
            return 'hoxCovertureNotDone';
        }
        if (this.covertureStatus === CovertureStatus.COVERTURE_DONE) {
            return 'hoxCoverture';
        }
        return null;
    }

    public static getCovertureIcon(covertureStatus:any): string | null {
        if (covertureStatus === CovertureStatus.COVERTURE_NOT_DONE) {
            return 'hoxCovertureNotDone';
        }
        if (covertureStatus === CovertureStatus.COVERTURE_DONE) {
            return 'hoxCoverture';
        }
        return null;
    }
}
