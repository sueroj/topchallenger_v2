import { CompleteStatus } from "core/enums/enums"

export default class Achievement {
    public id: number = 0
    public title: string = ''
    public difficulty: number = 0
    public rp_reward: number = 0
    public is_complete: boolean = true
    // CompleteStatus likely to include DateTime of when completed
    public complete_status: CompleteStatus = CompleteStatus.NOT_COMPLETE

    // TODO: define Metrics
    public metrics: any = null


    public test_achievement(id: number, title: string, difficulty: number) {
            this.id = id
            this.title = title
            this.difficulty = difficulty
        return this
    }
}