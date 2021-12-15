export enum FurnitureCategories {
    Minibar = 'MINIBAR',
    Linen = 'LINEN',
    Extra = 'EXTRA'
}

export const FurnitureCategoriesOptions: Map<FurnitureCategories, string> = new Map([
    [FurnitureCategories.Minibar, 'furniture-categories.minibar'],
    [FurnitureCategories.Linen, 'furniture-categories.linen'],
    [FurnitureCategories.Extra, 'furniture-categories.extra']
]);
export const FurnitureCategoryIconsOptions: Map<FurnitureCategories, string> = new Map([
    [FurnitureCategories.Minibar, 'hoxMinibar'],
    [FurnitureCategories.Linen, 'hoxLinen'],
    [FurnitureCategories.Extra, 'hoxExtra']
]);
