import { SortDirection } from "./sort-direction.enum";


export abstract class SearchRequestDTO {
    public limit?: number;
    public offset?: number;
    public sort?: string;
    public sortDirection?: SortDirection;
}
