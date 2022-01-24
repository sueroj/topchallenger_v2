export enum EventView {
    LIST,
    CALENDAR,
    MAP
}

export enum EventCategory {
    EVENT = 'Event',
    ZONE = 'Zone',
    COURSE = 'Course',
    MILESTONE = 'Milestone'
}

export enum CourseCategory {
    STANDARD,
    SPRINT,
    LOOP,
    OPEN_GUIDED,
    OPEN_UNGUIDED
}



export enum League {
    NEWBIE = 'Newbie League',
    BRONZE = 'Bronze League',
    SILVER = 'Silver League',
    GOLD = 'Gold League',
    PLATINUM = 'Platnium League',
    DIAMOND = 'Diamond League'
}

export enum MilestoneCategory {
    DAILY,
    WEEKLY,
    MONTHLY,
}

export enum ItemType {
    ZONE_CAPTURE_FLAG = 'zcf',
    ZONE_CAPTURE_CANCEL = 'zcc',
    ZONE_CAPTURE_INCREASER = 'zci',
    ZONE_CAPTURE_DECREASER = 'zcd',
    ZONE_PROTECT_FLAG = 'zpf',
    RP_BOOSTER = 'rpb',
    FOREIGN_CAPTURE_FLAG = 'fcf',
    FOREIGN_CAPTURE_CANCEL = 'fcc',
    KEY_TO_THE_CITY = 'kttc'
}

export enum CompleteStatus {
    NOT_COMPLETE,
    STANDARD_T0,
    BRONZE_T1,
    SILVER_T2,
    GOLD_T3
}

export enum ItemTier {
    STANDARD_T0,
    BRONZE_T1,
    SILVER_T2,
    GOLD_T3
}

// TODO: STILL needs fine tuning
export enum AssetType {
    // Items imported by enum ItemType
    ITEM = 'items',
    
    // Below types imported by id number
    BANNER = 'banners',
    ACHIEVEMENT = 'achievements',
    MILESTONE = 'milestones'
}