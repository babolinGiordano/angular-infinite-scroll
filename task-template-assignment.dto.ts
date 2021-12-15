
import { TaskTemplateAssignmentOccurrenceDTO } from './task-template-assignment-occurrence.dto';
import { TaskTemplateRuleDTO } from './task-template-rule.dto';


export class TaskTemplateAssignmentDTO {
    public id!: string;
    public duration!: number;
    public occurrences!: TaskTemplateAssignmentOccurrenceDTO[];
    public rule!: TaskTemplateRuleDTO;
}
