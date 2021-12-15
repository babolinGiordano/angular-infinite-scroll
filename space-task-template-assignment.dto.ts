
import { SpaceCategories } from './space-categories';
import { SpaceDTO } from './space.dto';
import { TaskTemplateAssignmentDTO } from './task-template-assignment.dto';


export class SpaceTaskTemplateAssignmentDTO {
    public id!: string;
    public space!: SpaceDTO;
    public assignment!: TaskTemplateAssignmentDTO;

    public get spaceCategory(): SpaceCategories {
        return this.space?.spaceCategory;
    }

    public get spaceName(): string {
        return this.space?.name;
    }
}
