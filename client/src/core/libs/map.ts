import mapboxgl from 'mapbox-gl';

import Events, { MappableEventCategories } from 'core/libs/events'
import { Zone, Course } from 'core/objects/event'

mapboxgl.accessToken = "pk.eyJ1Ijoic3Vlcm8zMjEiLCJhIjoiY2thbnZzdWdvMWVxZTJybzZ4ZGczYnZwYSJ9.SVHp7KD_q6G28YRVBCAyNw";

const DEFAULT_ZOOM: number = 5
const DEFAULT_START_LNG: number = 0.17
const DEFAULT_START_LAT:  number = 52.18

export default class Mapbox {
    public start_lng: number = DEFAULT_START_LNG
    public start_lat: number = DEFAULT_START_LAT
    public zoom: number = DEFAULT_ZOOM
    public map: mapboxgl.Map = this.initialize()
    public center: any = [this.start_lng, this.start_lat]
    public events: Events

    public constructor(events: Events) {
        this.events = events
    }


    public draw() {
        this.center = this.get_center()
        this.draw_events()

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
                console.log('test drag') // TODO - DEBUG ONLY
                center = map.getCenter()
            })
            map.on('zoomend', function() {
                console.log('test zoom') //TODO - DEBUG ONLY
                center = map.getCenter()
            })
        })
        return center
    }

    public draw_events() {
        let mappable = this.events.list_mappable()
        let map = this.map

        console.log(mappable)

        function new_source(event: Zone | Course) {
            map.addSource(event.title, {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [{
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': event.coordinates[0].get()
                        }
                    }]
                }
            })
        }

        function new_layer(event: Zone | Course) {
            map.addLayer({
                'id': event.title,
                'type': 'circle',
                'source': event.title,
                'paint': {
                    'circle-radius': {
                    'base': 30,
                    'stops': [
                        [4,8],
                        [12,16],
                        [13,32],
                        [14,64],
                        [15,128],
                        [16,256],
                        [17,512],
                        [18,1024]
                    ]
                },
                'circle-color': '#FF0000',
                'circle-opacity': 0.4
                }
            })
        }

        map.on('load', function () {
            mappable.forEach(event => {
                new_source(event)
                new_layer(event)
            });
        })
    }

}