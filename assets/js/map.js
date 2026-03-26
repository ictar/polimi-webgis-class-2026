import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';
import { Map, View, Overlay } from 'ol';
import { Tile, Image, Group, Vector } from 'ol/layer';
import { OSM, ImageWMS, XYZ, StadiaMaps } from 'ol/source';
import VectorSource from 'ol/source/Vector';
import { GeoJSON } from 'ol/format';
import { fromLonLat } from 'ol/proj';
import { ScaleLine, FullScreen, MousePosition, } from 'ol/control';
import LayerSwitcher from 'ol-layerswitcher';
import { createStringXY } from 'ol/coordinate';
import { Style, Fill, Stroke } from 'ol/style';


// OpenStreetMap base map
let osm = new Tile({
    visible: true,
    source: new OSM()
});

// Colombia Administrative Boundaries
let colombiaBoundary = new Image({
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm0' }
    }),
    visible: true
});

// Colombia Administrative level 1
var colombiaDepartments = new Image({
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm1' }
    }),
    opacity: 0.5,
    visible: true
});

// Colombia Roads
var colombiaRoads = new Image({
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_roads' }
    }),
    visible: true
});

// Colombia Rivers
var colombiaRivers = new Image({
    source: new ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_rivers' }
    }),
    visible: true,
    minResolution: 1000,
    maxResolution: 5000
});

// Add the layer groups code here:


// Map Initialization
let mapOrigin = fromLonLat([-74, 4.6]);
let zoomLevel = 5;
let map = new Map({
    target: document.getElementById('map'),
    layers: [osm, colombiaBoundary, colombiaDepartments, colombiaRoads, colombiaRivers],
    view: new View({
        center: mapOrigin,
        zoom: zoomLevel
    }),
    projection: 'EPSG:3857'
});

// Add the map controls here:

// Add the LayerSwitcher control here:

// Add the Stadia Basemaps here:

// Add the ESRI XYZ basemaps here:

// Add the WFS layer here:

// Add the local static GeoJSON layer here:

// Add the popup code here:


// Add the singleclick event code here


// Add the pointermove event code here:

// Add the legend code here:

// Add the layer groups to the map here, at the end of the script!