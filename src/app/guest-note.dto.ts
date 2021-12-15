import { GuestNoteTemplateDTO } from "./guest-note-template.dto";

export class GuestNoteDTO {
    public id!: string;
    public guestId!: string;
    public content!: string;
    public guestNoteTemplate!: GuestNoteTemplateDTO;
    public departmentId!: string;
}
