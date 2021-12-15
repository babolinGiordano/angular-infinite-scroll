import { ProductTypeDTO } from "./product-type.dto";


export class ProductDTO {
    constructor(productType: ProductTypeDTO, quantity: number) {
        this.productType = productType;
        this.quantity = quantity;
    }

    public id!: string;
    public productType!: ProductTypeDTO;
    public quantity!: number;
}
