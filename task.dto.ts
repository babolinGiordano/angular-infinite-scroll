
import { ChecklistDTO } from './checklist.dto';
import { DepartmentDTO } from './departments.dto';
import { EmployeeDTO } from './employee.dto';
import { HotelDTO } from './hotel.dto';
import { ImageDTO } from './image.dto';
import { QualityAssuranceDTO } from './quality-assurance.dto';
import { ReservationDTO } from './reservation.dto';
import { SpaceStatus } from './space-status.enum';
import { SpaceDTO } from './space.dto';
import { TaskStatus } from './task-status.enum';
import { TaskTemplateDTO } from './task-template.dto';


export class TaskDTO {
    public id!: string;
    public hotel!: HotelDTO;
    public space!: SpaceDTO;
    public assignee!: EmployeeDTO;
    public inspectedBy?: EmployeeDTO;
    public inspectedAt?: Date;
    public taskTemplate!: TaskTemplateDTO;
    public note?: string;
    public status!: TaskStatus;
    public priority!: boolean;
    public duration?: number;
    public spentTime?: number;
    public resolutionTime?: number;
    public dueDate!: Date;
    public dueTime?: string;
    public doneAt?: Date;
    public createdAt?: Date;
    public closedAt?: Date;
    public lastProgressAt?: Date;
    public images!: ImageDTO[];
    public qualityAssurance?: QualityAssuranceDTO;
    public checklist?: ChecklistDTO;
    public createdBy?: EmployeeDTO;
    public currentReservation?: ReservationDTO;
    public nextReservation?: ReservationDTO;
    public spaceStatus?: SpaceStatus;
    public qualityControlLock!: boolean;
    public pauseTime?: number;
    public percentageDuration?: number;
    public displayTimeTracking?: boolean;

    public get name(): string {
        return this.taskTemplate?.name;
    }

    public get department(): DepartmentDTO {
        return this.taskTemplate?.department;
    }

    public get spaceName(): string {
        return this.space?.name;
    }

    public get assigneeName(): string {
        return this.assignee?.fullName;
    }

    public get numberOfImages(): number {
        return this.images?.length || 0;
    }

}
