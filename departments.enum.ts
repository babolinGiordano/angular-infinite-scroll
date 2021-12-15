export enum Departments {
    ALL = '',
    GENERAL = 'GENERAL',
    HOUSEKEEPING = 'HOUSEKEEPING',
    MAINTENANCE = 'MAINTENANCE',
    RECEPTION = 'RECEPTION',
    FOOD_AND_BEVERAGE = 'FOOD_AND_BEVERAGE',
    CONCIERGE = 'CONCIERGE',
    ADMINISTRATIVE = 'ADMINISTRATIVE',
    OTHER = 'OTHER'
}

export const DepartmentsFullOptions: Map<Departments, string> = new Map([
    [Departments.GENERAL, 'departments.general'],
    [Departments.HOUSEKEEPING, 'departments.housekeeping'],
    [Departments.MAINTENANCE, 'departments.maintenance'],
    [Departments.RECEPTION, 'departments.reception'],
    [Departments.CONCIERGE, 'departments.concierge'],
    [Departments.ADMINISTRATIVE, 'departments.administrative'],
    [Departments.FOOD_AND_BEVERAGE, 'departments.food_and_beverage']
]);

