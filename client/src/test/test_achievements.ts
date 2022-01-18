import Achievement from "core/objects/achievement"

export default class TestAchievement {
    public achievements: Achievement[] = []

    public constructor() {
        this.achievements = this.generate()
    }

    private generate() {
        return [
            new Achievement().test_achievement(111111, 'Cycle 10 miles', 2),
            new Achievement().test_achievement(111112, 'Cycle 20 miles', 2),
            new Achievement().test_achievement(111113, 'Cycle 30 miles', 2),
            new Achievement().test_achievement(111114, 'Cycle 40 miles', 2),
            new Achievement().test_achievement(111115, 'Cycle 50 miles', 2),
            new Achievement().test_achievement(111116, 'Cycle 60 miles', 2),
            new Achievement().test_achievement(111117, 'Cycle 70 miles', 2),
            new Achievement().test_achievement(111118, 'Cycle 80 miles', 2),
            new Achievement().test_achievement(111119, 'Cycle 90 miles', 2),
            new Achievement().test_achievement(111120, 'Cycle 100 miles', 2),
            new Achievement().test_achievement(111121, 'Run 10 miles', 2),
            new Achievement().test_achievement(111122, 'Run 20 miles', 2),
            new Achievement().test_achievement(111123, 'Run 30 miles', 2),
            new Achievement().test_achievement(111124, 'Run 40 miles', 2),
            new Achievement().test_achievement(111125, 'Run 50 miles', 2),
            new Achievement().test_achievement(111126, 'Run 60 miles', 2),
            new Achievement().test_achievement(111127, 'Run 70 miles', 2),
            new Achievement().test_achievement(111128, 'Run 80 miles', 2),
            new Achievement().test_achievement(111129, 'Run 90 miles', 2),
        ]
    }
}