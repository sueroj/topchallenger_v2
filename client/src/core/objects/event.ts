import { GeoJSON } from "core/objects/misc"

import { Category, CompleteStatus } from "core/enums/enums"

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
    public category: Category = Category.EVENT
    // TODO: debug only, reset to false
    public coordinates: GeoJSON[] | null = null
    public start_datetime: number = 0
    public stop_datetime: number = 0
    public difficulty: number = 0

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

export class Milestone extends Event {
    public constructor() {
        super()
        this.category = Category.MILESTONE
    }
}

export class Zone extends Event {
    public constructor() {
        super()
        this.category = Category.ZONE
    }
}

export class Course extends Event {
    public constructor() {
        super()
        this.category = Category.COURSE
    }
}

// // tentative
// export class OpenZoneCourse extends Event {

// }

// // tentative
// export class LoopChallengeCourse extends Event {

// }

export class Sprint extends Event {
    public constructor() {
        super()
        this.category = Category.SPRINT
    }
}

export class CompletedEvent {
    public id: number = 0
    public completion_status = CompleteStatus.NOT_COMPLETE

    public test(id: number, completion_status: CompleteStatus) {
        this.id = id
        this.completion_status = completion_status
        return this
    }
}