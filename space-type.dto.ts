
import { FurnitureTypeDTO } from './furniture-type.dto';
import { SpaceCategories } from './space-categories';

export class SpaceTypeDTO {
    public id!: string;
    public name!: string;
    public description!: string;
    public spaceCategory!: SpaceCategories;
    public cleaningTimeEmpty!: number;
    public cleaningTimeArrivalOrDeparture!: number;
    public cleaningTimeInHouse!: number;
    public cleaningTimeNonGuestSpace!: number;
    public cleaningTimeSanitization!: number;
    public furnitureMinibarType!: FurnitureTypeDTO;
    public furnitureLinenType!: FurnitureTypeDTO;
    public furnitureExtraType!: FurnitureTypeDTO;
    public enabled!: boolean;
    public numberOfSpaces!: number;
}
