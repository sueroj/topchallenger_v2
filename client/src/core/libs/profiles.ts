import Profile from "core/objects/profile"

import TestProfiles from "test/test_profiles"


export default class Profiles {
    public current: Profile
    private friends: Profile[] = [] // TODO: Awt implement
    private all_profiles: Profile[]
    
    public constructor() {
        this.current = new Profile()
        this.all_profiles = new TestProfiles().profiles
    }

    // TODO: Create common options to change num of profiles displayed in leaderboard
    public generate_leaderboard() {
        console.log(this.all_profiles)
        // this.sort_by_rank()
        console.log(this.all_profiles)
        // this.all_profiles.forEach(profile => {

        // })
    }

    private sort_by_rank() {
        this.all_profiles.sort(function(a: Profile, b: Profile){
            return a.rank - b.rank
        })
    }
}