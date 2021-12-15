import { ChecklistDTO } from "./checklist.dto";
import { EmployeeDTO } from "./employee.dto";
import { ImageDTO } from "./image.dto";
import { QualityAssuranceDTO } from "./quality-assurance.dto";
import { ReservationViewModel } from "./reservation-view.model";
import { SpaceStatus } from "./space-status.enum";
import { SpaceDTO } from "./space.dto";
import { TaskStatus } from "./task-status.enum";
import { TaskTemplateDTO } from "./task-template.dto";
import { TaskDTO } from "./task.dto";

export class TaskViewModel {
  public id?: string;
  public name?: string;
  public spaceName?: string;
  public spaceStatus?: SpaceStatus;
  public currentReservation?: ReservationViewModel;
  public nextReservation?: ReservationViewModel;
  public assignee?: EmployeeDTO;
  public images?: ImageDTO[];
  public note?: string;
  public status?: TaskStatus;
  public taskTemplate?: TaskTemplateDTO;
  public checklist?: ChecklistDTO;
  public qualityAssurance?: QualityAssuranceDTO;
  public duration?: number;
  public spentTime?: number;
  public resolutionTime?: number;
  public createdBy?: EmployeeDTO;
  public dueDate?: Date;
  public inspectedBy?: EmployeeDTO;
  public inspectedAt?: Date;
  public createdAt?: Date;
  public doneAt?: Date;
  public lastProgressAt?: Date;
  public dueTime?: string;
  public space?: SpaceDTO;
  public priority?: boolean;
  public qualityControlLock?: boolean;
  public pauseTime?: number;
  public percentageDuration?: number;
  public displayTimeTracking?: boolean;

  private readonly QUICK_CHECK_TASK_NAME?= 'Quick check';


  constructor(dto: TaskDTO) {
    this.id = dto?.id;
    this.priority = dto?.priority;
    this.qualityControlLock = dto?.qualityControlLock;
    this.name = dto?.taskTemplate?.name;
    this.space = dto?.space;
    this.duration = dto?.duration;
    this.spaceName = dto?.space?.name;
    this.spaceStatus = dto?.spaceStatus;
    this.spentTime = dto?.spentTime;
    this.resolutionTime = dto?.resolutionTime;
    this.assignee = dto?.assignee;
    this.images = dto?.images;
    this.note = dto?.note;
    this.status = dto?.status;
    this.taskTemplate = dto?.taskTemplate;
    this.createdBy = dto?.createdBy;
    this.dueDate = dto?.dueDate;
    this.dueTime = dto?.dueTime;
    this.doneAt = dto?.doneAt;
    this.checklist = dto?.checklist;
    this.qualityAssurance = dto?.qualityAssurance;
    this.pauseTime = dto?.pauseTime;
    this.percentageDuration = dto?.percentageDuration;
    this.inspectedBy = dto?.inspectedBy;
    this.inspectedAt = dto?.inspectedAt;
    this.createdAt = dto?.createdAt;
    this.displayTimeTracking = dto?.displayTimeTracking;
    this.lastProgressAt = dto?.lastProgressAt;

    if (dto?.currentReservation) {
      this.currentReservation = new ReservationViewModel(dto?.currentReservation);
    }
    if (dto?.nextReservation) {
      this.nextReservation = new ReservationViewModel(dto?.nextReservation);
    }
  }

}
