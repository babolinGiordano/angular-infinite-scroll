
import { EmployeeDTO } from './employee.dto';
import { QualityAssuranceChecklistDTO } from './quality-assurance-checklist.dto';

export class QualityAssuranceDTO {
    public id!: string;
    public controlledAt!: Date;
    public checklist!: QualityAssuranceChecklistDTO;

    public controlledBy!: EmployeeDTO;
}
