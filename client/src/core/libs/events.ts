
import TestEvents from "test/test_events"
import { Category } from "core/enums/enums"
import PROFILE, { Profile } from 'core/objects/profile'
import { CompletedEvent, Milestone, Zone, Course, Sprint } from 'core/objects/event'

export type AllEventCategories = Milestone[] | Zone[] | Course[] | Sprint[]
type EventTable = {
    all_events: AllEventCategories,
    completed_events: CompletedEvent[]
}

export class EventsFilter {
    public zone: boolean = true
    public course: boolean = true
    public sprint: boolean = true
    public milestone: boolean = true
    public completed: boolean = true
}


// TODO: Refactor & optimize this class. Will be used a lot.
export default class Events {
    private profile: Profile = PROFILE
    private events: EventTable = this.get_events()
    public filter = {
        zone: true,
        course: true,
        sprint: true,
        milestone: true,
        completed: true
    }

    public constructor() {
        this.update_completed_events()
    }

    public list_all() {
        return this.events.all_events
    }

    // TODO: Update filter types after TestEvents is removed
    public list_filtered() {
        let filtered: any[] = []

        this.events.all_events.forEach(event => {
            if (event.category === Category.ZONE) {
                filtered.push(event)
            }
        })

        // function fn(filter_type: boolean, events: any[]) {
        //     if (filter_type) {
        //         filtered.push(events)
        //     }
        // }
        // fn(this.filter.zone, this.events.zones)
        // fn(this.filter.course, this.events.courses)
        // fn(this.filter.sprint, this.events.sprints)
        // fn(this.filter.milestone, this.events.milestones)
        return filtered
    }

    private get_events() {
        // Http get action from server

        let test_event = new TestEvents()
        return {
            all_events: test_event.events,
            completed_events: test_event.completed_events
        }
    }

    private update_completed_events() {
        this.profile.completed_events.forEach(completed_event => {
            this.events.all_events.forEach(event => {
                if (completed_event.id === event.id) {
                    event.is_complete = true
                    event.complete_status = completed_event.completion_status
                }
            })
        })    
    }
}