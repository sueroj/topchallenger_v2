
import { CompleteStatus } from 'core/enums/enums'
import { TestCompletedEvents } from 'test/test_events'

// TODO: Eval use of Username
// type Username = {
//     first: string
//     last: string
// }

type CompletedEvent = {
    id: number
    completion_status: CompleteStatus
}

export class Profile {
    public id: number = 12345
    public firstname: string = 'Joel'
    public lastname: string = 'Suero'
    // public home: City = ''
    public profile_img: string = ''
    public completed_events: CompletedEvent[] = new TestCompletedEvents().events

}

const PROFILE = new Profile()
export default PROFILE