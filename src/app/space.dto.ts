

import { FlagOptions } from './flags.enum';
import { FurnitureTypeDTO } from './furniture-type.dto';
import { HotelDTO } from './hotel.dto';
import { ReservationDTO } from './reservation.dto';
import { SectionDTO } from './section.dto';
import { SpaceCategories } from './space-categories';
import { SpaceCovertureDTO } from './space-coverture.dto';
import { SpaceNoteDTO } from './space-note.dto';
import { SpaceStatus } from './space-status.enum';
import { SpaceTypeDTO } from './space-type.dto';

export class SpaceDTO {
    public id!: string;
    public hotel!: HotelDTO;
    public name!: string;
    public spaceCategory!: SpaceCategories;
    public spaceType!: SpaceTypeDTO;
    public section!: SectionDTO;
    public subSection!: SectionDTO;
    public subSubSection!: SectionDTO;
    public displayOrder!: number;
    public flagNumber!: number;
    public todayReservations!: ReservationDTO[];
    public pmsRoomName!: string;
    public enabled!: boolean;
    public doNotDisturbManual!: boolean;
    public doNotDisturbAutomated!: boolean;
    public priority!: boolean;
    public doNotDisturbTime!: Date;
    public guestManual!: boolean;
    public guestAutomated!: boolean;
    public spaceNotes!: SpaceNoteDTO[];
    public coverture!: SpaceCovertureDTO;
    public lostAndFoundReported!: boolean;
    public housekeeper!: boolean;
    public cleaningTimeEmpty!: number;
    public cleaningTimeArrivalOrDeparture!: number;
    public cleaningTimeInHouse!: number;
    public cleaningTimeSanitization!: number;
    public cleaningTimeNonGuestSpace!: number;
    public furnitureMinibarType!: FurnitureTypeDTO;
    public furnitureLinenType!: FurnitureTypeDTO;
    public furnitureExtraType!: FurnitureTypeDTO;
    public status!: SpaceStatus;

    public get convertedDndTime(): string {
        return '';
    }

    public static getConvertedDndTime(space: SpaceDTO): string {
        return '';
    }

    public get flagColor(): string {
        return FlagOptions.get(this.flagNumber) || '';
    }

    public static getFlagColor(space: SpaceDTO): string {
        return FlagOptions.get(space.flagNumber) || '';
    }

    public get flagIcon(): string | null {
        if (this.flagNumber !== undefined) {
            return (this.flagNumber === 0) ? null : 'hoxFlag';
        }
        return null;
    }

    public static getFlagIcon(space: SpaceDTO): string | null {
        if (space.flagNumber !== undefined) {
            return (space.flagNumber === 0) ? null : 'hoxFlag';
        }
        return null;
    }

    public get furnitureTypes(): FurnitureTypeDTO[] {
        const types: FurnitureTypeDTO[] = [];
        const furnitureMinibarType = this.furnitureMinibarType || this.spaceType.furnitureMinibarType;
        const furnitureLinenType = this.furnitureLinenType || this.spaceType.furnitureLinenType;
        const furnitureExtraType = this.furnitureExtraType || this.spaceType.furnitureExtraType;

        if (furnitureMinibarType) {
            types.push(furnitureMinibarType);
        }
        if (furnitureLinenType) {
            types.push(furnitureLinenType);
        }
        if (furnitureExtraType) {
            types.push(furnitureExtraType);
        }
        return types;
    }

    public static getFurnitureTypes(space: SpaceDTO): FurnitureTypeDTO[] {
        const types: FurnitureTypeDTO[] = [];
        const furnitureMinibarType = space?.furnitureMinibarType || space?.spaceType.furnitureMinibarType;
        const furnitureLinenType = space?.furnitureLinenType || space?.spaceType.furnitureLinenType;
        const furnitureExtraType = space?.furnitureExtraType || space?.spaceType.furnitureExtraType;

        if (furnitureMinibarType) {
            types.push(furnitureMinibarType);
        }
        if (furnitureLinenType) {
            types.push(furnitureLinenType);
        }
        if (furnitureExtraType) {
            types.push(furnitureExtraType);
        }
        return types;
    }

    public get spaceTypeName(): string {
        return this.spaceType?.name;
    }

    public getSpaceTypeName(space: SpaceDTO): string {
        return space.spaceType?.name;
    }
}
