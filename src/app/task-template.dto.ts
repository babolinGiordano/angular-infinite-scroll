import { ChecklistDTO } from './checklist.dto';
import { DepartmentDTO } from './departments.dto';
import { FaultCategoryDTO } from './fault-category.dto';
import { GroupDTO } from './groups.dto';
import { HotelDTO } from './hotel.dto';
import { ImpactOnCleaningStatus } from './impact-on-cleaning-status.enum';
import { Severity } from './severity.enum';
import { SpaceCategories } from './space-categories';
import { SpaceTypeDTO } from './space-type.dto';
import { TaskTemplateAvailability } from './task-template-availability.enum';
import { TaskTemplateDocumentDTO } from './task-template-document.dto';
import { TaskTemplateRuleDTO } from './task-template-rule.dto';
import { TaskTemplateType } from './template-type.enum';



export class TaskTemplateDTO {
    public id!: string;
    public name!: string;
    public hotel!: HotelDTO;
    public severity!: Severity;
    public department!: DepartmentDTO;
    public type!: TaskTemplateType;
    public availabilities!: TaskTemplateAvailability[];
    public spaceCategories!: SpaceCategories[];
    public allowInspection!: boolean;
    public impactOnCleaningStatus!: ImpactOnCleaningStatus;
    public hasImpactOnSanitizationStatus!: boolean;
    public allowQualityControl?: boolean;
    public enabled!: boolean;
    public closeTask!: boolean;
    public displayTimeTracking!: boolean;
    public employeeGroups?: GroupDTO[];
    public documents?: TaskTemplateDocumentDTO[];
    public todoChecklist?: ChecklistDTO;
    public qualityControlChecklist?: ChecklistDTO;
    public rules!: TaskTemplateRuleDTO[];
    public duration!: number;
    public faultCategory!: FaultCategoryDTO;
    public spaceTypes!: SpaceTypeDTO[];
}
