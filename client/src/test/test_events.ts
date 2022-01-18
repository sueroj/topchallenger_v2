
import { Course, Milestone, Zone, CompletedEvent } from 'core/objects/event'
import { CompleteStatus, CourseCategory, MilestoneCategory } from 'core/enums/enums'
import { GeoJSON } from 'core/objects/misc'


export default class TestEvents {
    public events: Milestone[] | Zone[] | Course[] = []

    public constructor() {
        this.events = this.generate()
    }

    private generate() {
        return [
            new Zone().test_event(111111, 'Cambridge_Zone_111111', [new GeoJSON(52.25007458166482, 0.09771024674431904)], 100, 105, 2),
            new Zone().test_event(111112, 'Cambridge_Zone_111112', [new GeoJSON(52.20217987205296, 0.12816986715051082)], 100, 105, 2),
            new Zone().test_event(111113, 'Cambridge_Zone_111113', [new GeoJSON(52.21278073455556, 0.1207356736215213)], 100, 105, 2),
            new Zone().test_event(111114, 'Cambridge_Zone_111114', [new GeoJSON(52.21219487450937, 0.12852937515557994)], 100, 105, 2),
            new Zone().test_event(111115, 'Cambridge_Zone_111115', [new GeoJSON(52.31038358513391, -0.04651882694422449)], 100, 105, 2),
            new Zone().test_event(111116, 'Cambridge_Zone_111116', [new GeoJSON(52.322801604201715, -0.07167662691151493)], 100, 105, 2),
            new Zone().test_event(111117, 'Cambridge_Zone_111117', [new GeoJSON(51.44495703453051, -0.29379622597988575)], 100, 105, 2),
            new Zone().test_event(111118, 'Cambridge_Zone_111118', [new GeoJSON(51.43971186317634, -0.26829705320369635)], 100, 105, 2),
            new Zone().test_event(111119, 'Cambridge_Zone_111119', [new GeoJSON(51.452849378445016, -0.25612874457374285)], 100, 105, 2),
            new Zone().test_event(111120, 'Cambridge_Zone_111120', [new GeoJSON(52.217157967742224, 0.2650225271069686)], 100, 105, 2),
            new Zone().test_event(111121, 'Cambridge_Zone_111121', [new GeoJSON(52.239267183455674, 0.24729052683543942)], 100, 105, 2),
            new Zone().test_event(111122, 'Cambridge_Zone_111122', [new GeoJSON(52.26366599667261, 0.22084400820221659)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111123, 'Cambridge_Sprint_111123', [new GeoJSON(52.218337545731195, 0.0559601681091208)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111124, 'Cambridge_Sprint_111124', [new GeoJSON(52.75152021341003, 0.40034499625653297)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111125, 'Cambridge_Sprint_111125', [new GeoJSON(51.407270947161095, -0.32634494607152315)], 100, 105, 2),
            new Milestone(MilestoneCategory.DAILY).test_event(111126, 'Cambridge_Milestone_111126', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.DAILY).test_event(111127, 'Cambridge_Milestone_111127', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.WEEKLY).test_event(111128, 'Cambridge_Milestone_111128', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.MONTHLY).test_event(111129, 'Cambridge_Milestone_111129', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111130, 'Cambridge_Course_111130', [new GeoJSON(51.172863015403344, -0.37917908455764615)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111131, 'Cambridge_Course_111131', [new GeoJSON(51.25041068851855, -0.3097294303155614)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111132, 'Cambridge_Course_111132', [new GeoJSON(51.66533564285701, 0.048231324988159935)], 100, 105, 2),
            new Zone().test_event(111133, 'Cambridge_Zone_111133', [new GeoJSON(52.02033416741215, -0.05558493941546306)], 100, 105, 2),
            new Zone().test_event(111134, 'Cambridge_Zone_111134', [new GeoJSON(52.0303943586152, -0.053949966856996615)], 100, 105, 2),
            new Course(CourseCategory.SPRINT).test_event(111135, 'Cambridge_Sprint_111135', [new GeoJSON(52.04531280788156, -0.05245124201173568)], 100, 105, 2),
            new Course(CourseCategory.SPRINT).test_event(111136, 'Cambridge_Sprint_111136', [new GeoJSON(52.07350273573311, 0.1124881426842532)], 100, 105, 2),
            new Course(CourseCategory.SPRINT).test_event(111137, 'Cambridge_Sprint_111137', [new GeoJSON(52.14389129575653, 0.12358690039531672)], 100, 105, 2),
            new Milestone(MilestoneCategory.DAILY).test_event(111138, 'Cambridge_Milestone_111138', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.DAILY).test_event(111139, 'Cambridge_Milestone_111139', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.WEEKLY).test_event(111140, 'Cambridge_Milestone_111140', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.MONTHLY).test_event(111141, 'Cambridge_Milestone_111141', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course(CourseCategory.LOOP).test_event(111142, 'Cambridge_Milestone_111142', [new GeoJSON(52.0917644949611, 0.0723288181716647)], 100, 105, 2),
            new Course(CourseCategory.LOOP).test_event(111143, 'Cambridge_Milestone_111143', [new GeoJSON(52.11316738161315, 0.1504429575273086)], 100, 105, 2),
            new Course(CourseCategory.OPEN_GUIDED).test_event(111144, 'Cambridge_Milestone_111144', [new GeoJSON(51.994954485452205, 0.010984684171039726)], 100, 105, 2),
            new Course(CourseCategory.OPEN_UNGUIDED).test_event(111145, 'Cambridge_Milestone_111145', [new GeoJSON(52.089938066164464, 0.15327312971531995)], 100, 105, 2),
        ]
    }
}

export class TestFeaturedEvents {
    public events: Milestone[] | Zone[] | Course[] = []

    public constructor() {
        this.events = this.generate()
    }

    private generate() {
        return [
            new Zone().test_event(111111, 'Cambridge_Zone_111111', [new GeoJSON(52.25007458166482, 0.09771024674431904)], 100, 105, 2),
            new Zone().test_event(111114, 'Cambridge_Zone_111114', [new GeoJSON(52.21219487450937, 0.12852937515557994)], 100, 105, 2),
            new Zone().test_event(111115, 'Cambridge_Zone_111115', [new GeoJSON(52.31038358513391, -0.04651882694422449)], 100, 105, 2),
            new Milestone(MilestoneCategory.WEEKLY).test_event(111128, 'Cambridge_Milestone_111128', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone(MilestoneCategory.MONTHLY).test_event(111129, 'Cambridge_Milestone_111129', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course(CourseCategory.STANDARD).test_event(111130, 'Cambridge_Course_111130', [new GeoJSON(51.172863015403344, -0.37917908455764615)], 100, 105, 2),
            new Milestone(MilestoneCategory.MONTHLY).test_event(111141, 'Cambridge_Milestone_111141', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course(CourseCategory.LOOP).test_event(111142, 'Cambridge_Milestone_111142', [new GeoJSON(52.0917644949611, 0.0723288181716647)], 100, 105, 2),
            new Course(CourseCategory.OPEN_UNGUIDED).test_event(111145, 'Cambridge_Milestone_111145', [new GeoJSON(52.089938066164464, 0.15327312971531995)], 100, 105, 2),
        ]
    }
}

export class TestCompletedEvents {
    public events: CompletedEvent[] = []

    // TODO: CompletedEvent data structure
    // test_id
    // timestamp
    // CompleteStatus

    public constructor() {
        this.events = [
            new CompletedEvent().test(111111, CompleteStatus.STANDARD),
            new CompletedEvent().test(111112, CompleteStatus.GOLD),
            new CompletedEvent().test(111113, CompleteStatus.STANDARD),
            new CompletedEvent().test(111114, CompleteStatus.GOLD),
            new CompletedEvent().test(111115, CompleteStatus.SILVER),
            new CompletedEvent().test(111116, CompleteStatus.GOLD),
            new CompletedEvent().test(111117, CompleteStatus.BRONZE),
            new CompletedEvent().test(111119, CompleteStatus.STANDARD),
            new CompletedEvent().test(111120, CompleteStatus.STANDARD),
            new CompletedEvent().test(111121, CompleteStatus.STANDARD),
            new CompletedEvent().test(111122, CompleteStatus.STANDARD)
        ]
    }

    public get() {
        return this.events
    }
}