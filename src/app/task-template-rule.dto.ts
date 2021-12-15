
import { DayOfWeek } from './day-of-week.enum';
import { Recurrence } from './recurrence.enum';
import { SpaceCategories } from './space-categories';
import { SpaceTaskTemplateAssignmentDTO } from './space-task-template-assignment.dto';


export class TaskTemplateRuleDTO {
    public id!: string;
    public name!: string;
    public startDate!: Date;
    public endDate!: Date | null;
    public repeatEveryUnit!: Recurrence;
    public repeatEveryX!: number;
    public repeatOn!: DayOfWeek[];
    public repeatPerDay!: number;
    public assignments!: SpaceTaskTemplateAssignmentDTO[];
    public enabled!: boolean;

    public get spaceCategories(): SpaceCategories[] {
        return Array.from(new Set(this.assignments?.map(assignment => assignment?.spaceCategory)));
    }

    public get showDays(): boolean {
        return (this.repeatEveryUnit === Recurrence.WEEK);
    }

}
