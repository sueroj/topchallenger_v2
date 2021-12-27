
import TestEvents from "test/test_events"
import { EventCategory } from "core/enums/enums"
import PROFILE, { Profile } from 'core/objects/profile'
import { CompletedEvent, Milestone, Zone, Course } from 'core/objects/event'

export type AllEventCategories = Milestone[] | Zone[] | Course[] | []
export type MappableEventCategories = Zone[] | Course[]

type EventTable = {
    all_events: AllEventCategories,
    mappable_events: MappableEventCategories
    zones: Zone[]
    courses: Course[]
    milestones: Milestone[]
}

// TODO: Refactor Events Filter. Make easier
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

    public list_all() {
        return this.events.all_events
    }

    public list_mappable() {
        return this.events.mappable_events
    }

    public get_recent_milestones() {

        let milestones: Milestone[] = []
        this.events.milestones.forEach(event => {
            if (event.is_complete) {
                milestones.push(event)
            }
        })

        console.log(milestones) // TODO: STOPPED HERE
    }

    // TODO: Update filter types after TestEvents is removed
    public list_filtered(events_filter: EventsFilter) {
        let filtered: any[] = []
        // console.log(events_filter)
        // this.events.all_events.forEach(event => {
        //     if (event.category === Category.ZONE && events_filter.zone) {
        //         filtered.push(event)
        //     }
        //     if (event.category === Category.COURSE_STARDARD && events_filter.course) {
        //         filtered.push(event)
        //     }
        //     if (event.category === Category.COURSE_SPRINT && events_filter.sprint) {
        //         filtered.push(event)
        //     }
        //     if (event.category === Category.MILESTONE && events_filter.milestone) {
        //         filtered.push(event)
        //     }
        // })

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
        // TODO: Replace w/ http action

        let test_all_events = new TestEvents().events
        test_all_events = this.update_completed_events(test_all_events)
        let zones_list: Zone[] = []
        let courses_list: Course[] = []
        let milestones_list: Milestone[] = []
        let mappable_list: MappableEventCategories = []

        test_all_events.forEach(event => {
            switch (event.category_major) {
                case EventCategory.ZONE:
                    zones_list.push(event)
                    break
                case EventCategory.COURSE:
                    courses_list.push(event)
                    break
                case EventCategory.MILESTONE:
                    milestones_list.push(event)
                    break
            }
            
            if (event.is_mappable) {
                mappable_list.push(event)
            }
        })

        return {
            all_events: test_all_events,
            mappable_events: mappable_list,
            zones: zones_list,
            courses: courses_list,
            milestones: milestones_list,
        }
    }

    private update_completed_events(events: Milestone[] | Zone[] | Course[]) {
        this.profile.completed_events.forEach(completed_event => {
            events.forEach(event => {
                if (completed_event.id === event.id) {
                    event.is_complete = true
                    event.complete_status = completed_event.complete_status
                }
            })
        })
        return events
    }
}