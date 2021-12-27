



// All decimal degrees (DD) expressed as lat, lng (Google, ISO 6709). 
// Note: Strava API & GeoJSON std express expressed as lng, lat
export class GeoJSON {
    public startLng = 0.0
    public startLat = 0.0


    public constructor(startLat: number, startLng: number) {
        this.startLng = startLng
        this.startLat = startLat
    }

    public get() {
        return [this.startLng, this.startLat]
    }
}