import { Component, OnInit } from '@angular/core';

//import Ol from 'openlayers';
//import * as Gp from 'geoportal-extensions-openlayers';

import {Services, olExtended as Ol} from 'geoportal-extensions-openlayers';

@Component({
  selector: 'app-map-openlayers-cmp',
  templateUrl: './map-openlayers-cmp.component.html',
  styleUrls: [
  './map-openlayers-cmp.component.css'
  ]
})

export class MapOpenlayersCmpComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        var createMap = function() {
            var map = new Ol.Map({
                target : "map",
                layers : [
                    new Ol.layer.GeoportalWMTS({
                        layer : "GEOGRAPHICALGRIDSYSTEMS.MAPS"
                    })
                ],
                view : new Ol.View({
                    center : [288074.8449901076, 6247982.515792289],
                    zoom : 8
                })
            });
            var mouse = new Ol.control.GeoportalMousePosition();
            map.addControl(mouse);
        }

        Services.getConfig({
            apiKey : "jhyvi0fgmnuxvfv0zjzorvdn",
            timeOut : 20000,
            onSuccess : createMap
        });
    }

}
