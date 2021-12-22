
import { Course, Milestone, Zone, Sprint, CompletedEvent } from 'core/objects/event'
import { CompleteStatus } from 'core/enums/enums'
import { GeoJSON } from 'core/objects/misc'


export default class TestEvents {
    public events: any[] = []
    public completed_events: CompletedEvent[] = []




    public constructor() {
        this.events = this.generate_events()
        this.completed_events = new TestCompletedEvents().get()
    }

    private generate_events() {
        return [
            new Zone().test_event(111111, 'Cambridge_Zone_111111', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111112, 'Cambridge_Zone_111112', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111113, 'Cambridge_Zone_111113', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111114, 'Cambridge_Zone_111114', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111115, 'Cambridge_Zone_111115', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111116, 'Cambridge_Zone_111116', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111117, 'Cambridge_Zone_111117', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111118, 'Cambridge_Zone_111118', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111119, 'Cambridge_Zone_111119', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111120, 'Cambridge_Zone_111120', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111121, 'Cambridge_Zone_111121', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111122, 'Cambridge_Zone_111122', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111123, 'Cambridge_Sprint_111123', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111124, 'Cambridge_Sprint_111124', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111125, 'Cambridge_Sprint_111125', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111126, 'Cambridge_Milestone_111126', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111127, 'Cambridge_Milestone_111127', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111128, 'Cambridge_Milestone_111128', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111129, 'Cambridge_Milestone_111129', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course().test_event(111130, 'Cambridge_Course_111130', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course().test_event(111131, 'Cambridge_Course_111131', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Course().test_event(111132, 'Cambridge_Course_111132', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111133, 'Cambridge_Zone_111133', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Zone().test_event(111134, 'Cambridge_Zone_111134', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111135, 'Cambridge_Sprint_111135', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111136, 'Cambridge_Sprint_111136', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Sprint().test_event(111137, 'Cambridge_Sprint_111137', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111138, 'Cambridge_Milestone_111138', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
            new Milestone().test_event(111139, 'Cambridge_Milestone_111139', [new GeoJSON(0.0, 0.0)], 100, 105, 2),
        ]
    }
}

export class TestCompletedEvents {
    public events: CompletedEvent[] = []

    public constructor() {
        this.events = [
            new CompletedEvent().test(111111, CompleteStatus.STANDARD),
            new CompletedEvent().test(111112, CompleteStatus.GOLD),
            new CompletedEvent().test(111113, CompleteStatus.STANDARD),
            new CompletedEvent().test(111114, CompleteStatus.GOLD),
            new CompletedEvent().test(111115, CompleteStatus.SILVER),
            new CompletedEvent().test(111116, CompleteStatus.GOLD),
            new CompletedEvent().test(111117, CompleteStatus.BRONZE),
        ]
    }

    public get() {
        return this.events
    }
}