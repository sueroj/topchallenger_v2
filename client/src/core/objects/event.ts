import { GeoJSON } from "core/objects/misc"

import TEST_EVENTS from 'test/test_events'

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
    public is_active: boolean = false
    public coordinates: GeoJSON[] | null = null
    public start_datetime: number = 0
    public stop_datetime: number = 0
    public difficulty: number = 0

    // TODO: define Measurements
    public measurements: any = null


    public test_event(id: number, title: string, coordinates: GeoJSON[], 
        start_datetime: any, stop_datetime: any, difficulty: number) {
            this.id = id
            this.title = title
            this.coordinates = coordinates
            this.start_datetime = start_datetime
            this.stop_datetime = stop_datetime
            this.difficulty = difficulty
    }
}

export class Course extends Event {

}

// tentative
export class OpenZoneCourse extends Event {

}

export class LoopChallengeCourse extends Event {

}

export class Sprint extends Event {

}