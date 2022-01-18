import { GeoJSON } from "core/objects/misc"

import { EventCategory, CourseCategory, MilestoneCategory, CompleteStatus } from "core/enums/enums"

export class EventsTable {
    // private http: Http = new Http()

    public constructor() {
        // http.get()

        return Event
    }
}

export class Event {
    public id: number = 0
    public title: string = ''
    public category_major: EventCategory = EventCategory.EVENT
    public category_minor: any = null
    // TODO: debug only, reset to false

    public coordinates: GeoJSON[] = []
    public start_datetime: number = 0
    public stop_datetime: number = 0
    public difficulty: number = 0

    public is_mappable: boolean = true
    public is_open: boolean = true
    public is_complete: boolean = true
    public complete_status: CompleteStatus = CompleteStatus.NOT_COMPLETE

    // TODO: define Metrics
    public metrics: any = null


    public test_event(id: number, title: string, coordinates: GeoJSON[], 
        start_datetime: any, stop_datetime: any, difficulty: number) {
            this.id = id
            this.title = title
            this.coordinates = coordinates
            this.start_datetime = start_datetime
            this.stop_datetime = stop_datetime
            this.difficulty = difficulty
        return this
    }
}

export class Zone extends Event {
    public constructor() {
        super()
        this.category_major = EventCategory.ZONE
    }
}

export class Course extends Event {
    public constructor(category: CourseCategory) {
        super()
        this.category_major = EventCategory.COURSE
        this.category_minor = category
    }
}

export class Milestone extends Event {
    public constructor(category: MilestoneCategory) {
        super()
        this.category_major = EventCategory.MILESTONE
        this.category_minor = category
        this.is_mappable = false
    }
}

export class CompletedEvent {
    public id: number = 0
    public complete_status = CompleteStatus.NOT_COMPLETE

    public test(id: number, complete_status: CompleteStatus) {
        this.id = id
        this.complete_status = complete_status
        return this
    }
}