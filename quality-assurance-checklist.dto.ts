import {QualityAssuranceChecklistItemDTO} from './quality-assurance-checklist-item.dto';

export class QualityAssuranceChecklistDTO {
    public id!: string;
    public name!: string;
    public department!: string;
    public score!: bigint;
    public items!: QualityAssuranceChecklistItemDTO[];
}
