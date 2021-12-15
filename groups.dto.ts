import { DepartmentDTO } from "./departments.dto";


export class GroupDTO {
    public id!: string;
    public name!: string;
    public department!: DepartmentDTO;
    public active!: boolean;
}
