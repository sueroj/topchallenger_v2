import Profile from "core/objects/profile";


export default class Http {
    private mock_profile: Profile = new Profile()


//     // Perform HTTP GET action
    public get(object: string) {
        // return object from server
        return this.mock_profile
    }

//     // HTTP PUT action

//     // HTTP POST action



}