
import {Course, OpenZoneCourse, LoopChallengeCourse, Sprint } from 'core/objects/event'


class TestEventsTable {
    public standard_courses: Course[] | null = null
    public open_zone_courses: OpenZoneCourse[] | null = null
    public loop_courses: LoopChallengeCourse[] | null = null
    public sprints_courses: Sprint[] | null = null


    public constructor() {
        // this.standard_courses = this.generate_standard_courses()
        // this.open_zone_courses = this.generate_open_zone_courses()
        // this.loop_courses = this.generate_loop_courses()
        // this.sprints_courses = this.generate_sprints_courses()
    }

    private generate_standard_courses() {

    }

    private generate_open_zone_courses() {

    }

    private generate_loop_courses() {

    }

    private generate_sprints_courses() {

    }
}

const TEST_EVENTS_TABLE = new TestEventsTable()
export default TEST_EVENTS_TABLE

