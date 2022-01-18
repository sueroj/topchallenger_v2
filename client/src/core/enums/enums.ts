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

export enum CompleteStatus {
    NOT_COMPLETE,
    STANDARD,
    GOLD,
    SILVER,
    BRONZE
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

export enum ItemCategory {
    ZONE_CAPTURE_FLAG,
    ZONE_CAPTURE_CANCEL,
    ZONE_CAPTURE_INCREASER,
    ZONE_CAPTURE_DECREASER,
    ZONE_PROTECT_FLAG,
    RP_BOOSTER,
    FOREIGN_CAPTURE_FLAG,
    FOREIGN_CAPTURE_CANCEL,
    KEY_TO_THE_CITY
}

export enum ItemTier {
    STANDARD_T0,
    BRONZE_T1,
    SILVER_T2,
    GOLD_T3
}