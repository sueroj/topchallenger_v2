import { GeoJSON } from "core/objects/misc"

export class Event {
    public is_active: boolean = false
    public coordinates: GeoJSON[] | null = null
    public start_datetime: number = 0
    public stop_datetime: number = 0
    public difficulty: number = 0
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