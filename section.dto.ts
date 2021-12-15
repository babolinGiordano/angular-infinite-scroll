export class SectionDTO {
    public id!: string;
    public name!: string;
    public parent!: SectionDTO;
}

export class SectionNodeFromFrontend {
    id?: string;
    item!: string;
    children?: SectionNodeFromFrontend[] = [];
    treeId?: number;
    level?: number;
    parentId?: string;
}

export class SectionNodeFromBackend {
    id!: string;
    name!: string;
    parent?: SectionNodeFromBackend;
}

export interface NodeDialogData {
    item: string;
    title: string;
    message: string;
}

export interface SectionCreationRequestDTO {
    hotelId?: string;
    name: string;
    parentSectionId?: string;
}
