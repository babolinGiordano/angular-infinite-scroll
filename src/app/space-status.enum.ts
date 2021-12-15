export enum SpaceStatus {
    DIRTY = 'DIRTY',
    VACANT_DIRTY = 'VACANT_DIRTY',
    VACANT_CLEAN = 'VACANT_CLEAN',
    CLEAN = 'CLEAN',
    INSPECTED = 'INSPECTED',
    SANITIZED = 'SANITIZED'
}

export const SpaceStatusOptions: Map<SpaceStatus, string> = new Map([
    [SpaceStatus.DIRTY, 'space.statuses.dirty'],
    [SpaceStatus.VACANT_DIRTY, 'space.statuses.vacant-dirty'],
    [SpaceStatus.VACANT_CLEAN, 'space.statuses.vacant-clean'],
    [SpaceStatus.CLEAN, 'space.statuses.clean'],
    [SpaceStatus.INSPECTED, 'space.statuses.inspected'],
    [SpaceStatus.SANITIZED, 'space.statuses.sanitized']
]);

export const SpaceStatusIcons: Map<SpaceStatus, string> = new Map([
    [SpaceStatus.DIRTY, 'hoxBroomUp'],
    [SpaceStatus.VACANT_DIRTY, 'hoxBroom'],
    [SpaceStatus.VACANT_CLEAN, 'hoxBroom'],
    [SpaceStatus.CLEAN, 'hoxBroom'],
    [SpaceStatus.INSPECTED, 'hoxInspection'],
    [SpaceStatus.SANITIZED, 'hoxSanitization']
]);
