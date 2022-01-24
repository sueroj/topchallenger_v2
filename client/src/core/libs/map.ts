import mapboxgl from 'mapbox-gl';

import Events, { MappableEventCategory } from 'core/libs/events'

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
    public toggles: any

    public constructor(events: Events, toggles: any) {
        this.events = events
        this.toggles = toggles
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
        let this_obj = this
        let mappable = this.events.get_mappable()
        
        console.log(mappable)

        // function new_source(event: MappableEventCategory) {
        //     map.addSource(event.title, {
        //         'type': 'geojson',
        //         'data': {
        //             'type': 'FeatureCollection',
        //             'features': [{
        //                 'type': 'Feature',
        //                 'properties': {},
        //                 'geometry': {
        //                     'type': 'Point',
        //                     'coordinates': event.coordinates[0].get()
        //                 }
        //             }]
        //         }
        //     })
        // }

        // function new_layer(event: MappableEventCategory) {
        //     map.addLayer({
        //         'id': event.title,
        //         'type': 'circle',
        //         'source': event.title,
        //         'paint': {
        //             'circle-radius': {
        //             'base': 30,
        //             'stops': [
        //                 [4,8],
        //                 [12,16],
        //                 [13,32],
        //                 [14,64],
        //                 [15,128],
        //                 [16,256],
        //                 [17,512],
        //                 [18,1024]
        //             ]
        //         },
        //         'circle-color': '#FF0000',
        //         'circle-opacity': 0.4
        //         }
        //     })
        // }
        
        // Configure map icons and triggers for each mappable event
        this.map.on('load', function () {
            mappable.forEach(event => {
                this_obj.new_source(event)
                this_obj.new_layer(event)
                this_obj.configurePointer(event)
                this_obj.configureModalOnClick(event)
            });

        })
    }

    private new_source(event: MappableEventCategory) {
        this.map.addSource(event.name, {
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

    private new_layer(event: MappableEventCategory) {
        this.map.addLayer({
            'id': event.name,
            'type': 'circle',
            'source': event.name,
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

    // TODO: EVAL if better to use title or id - currently using title, prefer id if possible
    private configurePointer(event: MappableEventCategory) {
        let this_obj = this
        let map = this.map

        // Change the cursor to a pointer when the mouse is over any layers
        map.on('mouseenter', event.name, function () {
            map.getCanvas().style.cursor = 'pointer'
        });
        // map.on('mouseenter', event.title, function () {
        //     this_obj.target.current = event.title
        //     this_obj.show_tooltip()
        // });
        // Change it back to a pointer when it leaves
        map.on('mouseleave', event.name, function () {
            map.getCanvas().style.cursor = ''
        });
    }

    private configureModalOnClick(event: MappableEventCategory) {
        let this_obj = this
        let map = this.map
        
        // On click, open event modal
        map.on('click', event.name, function () {
            this_obj.toggles.event_modal()
        })

    }

}