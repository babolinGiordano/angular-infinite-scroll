import { SpaceCategories } from "./space-categories";
import { TaskStatus } from "./task-status.enum";


export class TaskFilterModel {
    hotelId!: string;
    spaceId?: string;
    spaceCategory?: SpaceCategories;
    statuses?: TaskStatus[];
    qualityControl?: boolean;
    dueDateFrom?: Date;
    dueDateTo?: Date;
    myTask?: boolean;
    departmentId?: string;
}
