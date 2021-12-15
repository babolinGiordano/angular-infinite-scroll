import { QualityAssuranceImageDto } from './quality-assurance-image-dto';
import { QualityAssuranceResultStatus } from './quality-assurance-result-status.enum';


export class QualityAssuranceChecklistItemDTO {
    public id!: string;
    public name!: string;
    public score!: number;
    public status!: QualityAssuranceResultStatus;
    public images!: QualityAssuranceImageDto[];
    public required!: boolean;
}
