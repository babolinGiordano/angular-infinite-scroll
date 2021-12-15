import { FurnitureCategories } from "./furniture-categories";
import { ProductDTO } from "./product.dto";


export class FurnitureTypeDTO {
    public id!: string;
    public name!: string;
    public furnitureCategory!: FurnitureCategories;
    public displayOrder!: number;
    public products!: ProductDTO[];
    public enabled!: boolean;
}
