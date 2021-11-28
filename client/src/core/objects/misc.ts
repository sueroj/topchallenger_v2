export class GeoJSON {
    public startLng = 0.0
    public startLat = 0.0

    public constructor(startLng: number, startLat: number) {
        this.startLng = startLng
        this.startLat = startLat
    }

    public get() {
        return [this.startLng, this.startLat]
    }
}