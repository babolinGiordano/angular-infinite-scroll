export enum SpaceCategories {
    ALL = '',
    ROOMS = 'ROOMS',
    COMMONS = 'COMMONS'
}

export const SpaceCategoriesOptions: Map<SpaceCategories, string> = new Map([
    [SpaceCategories.ROOMS, 'space-categories.rooms'],
    [SpaceCategories.COMMONS, 'space-categories.commons']
]);

export const SpaceCategoriesFilterOptions: Map<SpaceCategories, string> = new Map([
    [SpaceCategories.ALL, 'common.all'],
    [SpaceCategories.ROOMS, 'space-categories.rooms'],
    [SpaceCategories.COMMONS, 'space-categories.commons']
]);


