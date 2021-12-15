
import { ProductCategoryDTO } from './product-category.dto';

export class ProductTypeDTO {
    public id!: string;
    public name!: string;
    public productCategory!: ProductCategoryDTO;
    public cost!: number;
    public price!: number;
    public displayOrder!: number;
    public enabled!: boolean;
}
