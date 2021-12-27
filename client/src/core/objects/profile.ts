
import { CompleteStatus, League } from 'core/enums/enums'
import { TestCompletedEvents } from 'test/test_events'

// TODO: Eval use of Username
// type Username = {
//     first: string
//     last: string
// }

type CompletedEvent = {
    id: number
    complete_status: CompleteStatus
}

type Title = {
    first: string,
    middle: string,
    last: string
}

export class Profile {
    public id: number = 12345
    public firstname: string = 'Joel'
    public lastname: string = 'Suero'
    public rank: number = 7
    public rp: number = 106 // TODO: RP is total of all earned, rank level is calc from there
    public league: League = League.GOLD

    // TODO: Feature for unlockable title combinations, to be shown on the leader boards
    public title: Title = {
        first: 'Ultra',
        middle: 'Marathon',
        last: 'Dude'
    }
    // public home: City = ''
    public profile_img: string = ''
    public completed_events: CompletedEvent[] = new TestCompletedEvents().events

}

const PROFILE = new Profile()
export default PROFILE