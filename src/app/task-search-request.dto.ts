import { SearchRequestDTO } from "./search-request-dto";
import { SpaceCategories } from "./space-categories";
import { TaskStatus } from "./task-status.enum";


export class TaskSearchRequestDTO extends SearchRequestDTO {
    public hotelId!: string;
    public spaceId?: string;
    public department?: string;
    public spaceCategory?: SpaceCategories;
    public statuses?: TaskStatus[];
    public qualityControl?: boolean;
    public myTask?: boolean;
    public taskTemplateName?: string[];
    public keyword?: string;
    public employeeId?: string;
    public sectionId?: string;
    public subSectionId?: string;
    public subSubSectionId?: string;
    public checklistId?: string;
    public dueDate?: Date; // v1 only
    public dueDateFrom?: Date; // v2 only
    public dueDateTo?: Date; // v2 only
    public departmentId?: string | null;

    // tasks report criteria
    public createdAtFrom?: Date;
    public createdAtTo?: Date;
    public doneAtFrom?: Date;
    public doneAtTo?: Date;
    public filterByCleaningTasks?: boolean;
    public filterByCleaningTasksInspected?: boolean;
    public filterBySanitizationTasks?: boolean;
    public filterByNotDoneTasks?: boolean;
    public filterByDepartureCleaning?: boolean;
    public filterByVacantCleaning?: boolean;
    public filterByQuickCheckCleaning?: boolean;
    public filterByQuickCheck?: boolean;
    public filterByInHouseCleaning?: boolean;
    public filterByOtherTasks?: boolean;
    public onlyFaultTasks?: boolean;
    public inProgressAt?: Date;
    public stillOpenAt?: Date;
}
