import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1Ijoic3Vlcm8zMjEiLCJhIjoiY2thbnZzdWdvMWVxZTJybzZ4ZGczYnZwYSJ9.SVHp7KD_q6G28YRVBCAyNw";

const DEFAULT_ZOOM: number = 5
const DEFAULT_START_LNG: number = 0.17
const DEFAULT_START_LAT:  number = 52.18

export default class Map {
    public start_lng: number = DEFAULT_START_LNG
    public start_lat: number = DEFAULT_START_LAT
    public zoom: number = DEFAULT_ZOOM
    public map: mapboxgl.Map = this.initialize()
    public center: any = [this.start_lng, this.start_lat]


    public draw() {
        this.center = this.get_center()

        return this
    }

    private initialize() {
        return new mapboxgl.Map({
            container: 'map',
            center: [this.start_lng, this.start_lat],
            zoom: this.zoom,
            style: 'mapbox://styles/mapbox/streets-v11',
            attributionControl: false
        })
    }

    private get_center() {
        let map = this.map
        let center = this.center

        map.on('load', function() {
            map.on('dragend', function() {
                console.log('test drag')
                center = map.getCenter()
            })
            map.on('zoomend', function() {
                console.log('test zoom')
                center = map.getCenter()
            })
        })
        return center
    }

    // private draw_zones() {
    //     let location_table = this.location_table
    //     let location = this.location
    //     let map = this.map

    //     function new_source(zone: Zone) {
    //         map.addSource(zone.name, {
    //             'type': 'geojson',
    //             'data': {
    //                 'type': 'FeatureCollection',
    //                 'features': [{
    //                     'type': 'Feature',
    //                     'properties': {},
    //                     'geometry': {
    //                         'type': 'Point',
    //                         'coordinates': zone.coordinates.get()
    //                     }
    //                 }]
    //             }
    //         })
    //     }

    //     function new_layer(zone: Zone) {
    //         map.addLayer({
    //             'id': zone.name,
    //             'type': 'circle',
    //             'source': zone.name,
    //             'paint': {
    //                 'circle-radius': {
    //                 'base': 30,
    //                 'stops': [
    //                     [4,8],
    //                     [12,16],
    //                     [13,32],
    //                     [14,64],
    //                     [15,128],
    //                     [16,256],
    //                     [17,512],
    //                     [18,1024]
    //                 ]
    //             },
    //             'circle-color': '#FF0000',
    //             'circle-opacity': 0.4
    //             }
    //         })
    //     }

    //     map.on('load', function () {
    //         location_table.zones.forEach((zone: Zone) => {
    //             console.log(location)
    //             new_source(zone)
    //             new_layer(zone)
    //         });
    //     })
    // }

}