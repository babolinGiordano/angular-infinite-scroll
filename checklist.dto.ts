export class ChecklistDTO {
    public id!: string;
    public name!: string;
    public departmentId!: string;
    public qualityControl!: boolean;
    public items!: ChecklistItemDTO[];
    public enabled!: boolean;
}

export class ChecklistItemDTO {
    public id!: string;
    public name!: string;
    public required?: boolean;
    public done?: boolean;
    public weight?: number;
}

export class ChecklistItemRequestDTO {
    public id?: string;
    public name!: string;
    public required?: boolean;
    public weight?: number;
}

export class ChecklistRequestDTO {
    public hotelId?: string;
    public name!: string;
    public departmentId?: string;
    public qualityControl?: boolean;
    public items?: ChecklistItemRequestDTO[];
}

export class ChecklistEditRequestDTO {
    public hotelId?: string;
    public name!: string;
    public department?: string;
    public qualityControl?: boolean;
    public items?: ChecklistItemDTO[];
    public previousChecklistItemIds?: string[];
}
