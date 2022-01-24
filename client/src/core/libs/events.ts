
import TestEvents, { TestFeaturedEvents } from "test/test_events"
import { EventCategory, MilestoneCategory } from "core/enums/enums"
import Profile from 'core/objects/profile'
import { Milestone, Zone, Course } from 'core/objects/event'
import { CategoryProgress } from "core/objects/misc"

export type AllEventCategories = Milestone[] | Zone[] | Course[] | []
export type MappableEventCategories = Zone[] | Course[]

export type AnyEventCategory = Milestone | Zone | Course
export type MappableEventCategory = Zone | Course

export type MilestoneCategories = {
    all: Milestone[],
    dailies: Milestone[],
    weeklies: Milestone[],
    monthlies: Milestone[]
}

export type MilestoneProgress = {
    all: CategoryProgress,
    dailies: CategoryProgress,
    weeklies: CategoryProgress,
    monthlies: CategoryProgress
}

type EventTable = {
    all_events: AllEventCategories,
    featured: AllEventCategories,
    mappable_events: MappableEventCategories,
    zones: Zone[],
    courses: Course[],
    // milestones: Milestone[]
    milestones: MilestoneCategories // TODO: consider adding complete & all milestones
}

// type CategoryProgress = {
//     all_events: AllEventCategories,
//     complete: AllEventCategories,
//     not_complete: AllEventCategories,
//     // total_num_complete: number,
//     // total_num_not_complete: number
// }

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
    private profile: Profile
    private events: EventTable
    public filter = {
        zone: true,
        course: true,
        sprint: true,
        milestone: true,
        completed: true
    }

    public constructor(profile: Profile) {
        this.profile = profile
        this.events = this.get_events()
    }

    public get_all() {
        return this.events.all_events
    }

    public get_mappable() {
        return this.events.mappable_events
    }

    public get_milestones() {
        return this.events.milestones
    }

    public get_milestones_progress() { // TODO: STOPPED HERE, consider adding complete & all milestones
        let milestones: MilestoneProgress = {
            all: new CategoryProgress(this.events.milestones.all),
            dailies: new CategoryProgress(this.events.milestones.dailies),
            weeklies: new CategoryProgress(this.events.milestones.weeklies),
            monthlies: new CategoryProgress(this.events.milestones.monthlies)
        } 
        return milestones
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
        let test_featured_events = new TestFeaturedEvents().events
        test_all_events = this.update_completed_events(test_all_events)
        test_featured_events = this.update_completed_events(test_featured_events)
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
            featured: test_featured_events,
            mappable_events: mappable_list,
            zones: zones_list,
            courses: courses_list,
            // milestones: this.sort_by_subcategory(milestones_list),
            milestones: {
                all: milestones_list,
                dailies: this.sort_by_subcategory(milestones_list, MilestoneCategory.DAILY),
                weeklies: this.sort_by_subcategory(milestones_list, MilestoneCategory.WEEKLY),
                monthlies: this.sort_by_subcategory(milestones_list, MilestoneCategory.MONTHLY)
            }
        }
    }

    private sort_by_subcategory(milestones: Milestone[], category: MilestoneCategory) {
        let sorted: Milestone[] = []
        milestones.forEach(event => {
            if (event.category_minor === category){
                sorted.push(event)
            }
        })
        return sorted
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