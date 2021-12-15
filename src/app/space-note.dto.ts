import { EmployeeDTO } from "./employee.dto";
import { SpaceDTO } from "./space.dto";


export class SpaceNoteDTO {
    public id!: string;
    public employee!: EmployeeDTO;
    public space!: SpaceDTO;
    public content!: string;
    public createdAt!: string;
    public updatedAt!: string;

}
