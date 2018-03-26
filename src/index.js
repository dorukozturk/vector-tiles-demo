import Map from 'ol/map';
import View from 'ol/view';
import VectorTileLayer from 'ol/layer/vectortile';
import VectorTileSource from 'ol/source/vectortile';
import MVT from 'ol/format/mvt';
import Style from 'ol/style/style';
import Fill from 'ol/style/fill';
import Stroke from 'ol/style/stroke';
import Circle from 'ol/style/circle';
import Text from 'ol/style/text';
import randomcolor from 'randomcolor';

var layer = new VectorTileLayer({
    declutter: true,
    source: new VectorTileSource({
	format: new MVT(),
	url: 'http://192.168.30.198:9002/data/v3/{z}/{x}/{y}.pbf'
    })
})

layer.setStyle(function(feature, resolution) {
    var properties = feature.getProperties();

    if (properties.layer == 'boundary') {
	return new Style({
	    stroke: new Stroke({
		color: randomcolor.randomColor()
	    })
	});
    } else {
	return new Style({
	    fill: new Fill({
		color: randomcolor.randomColor()
	    })
	});
    }
});

var map = new Map({
    layers: [layer],
    target: 'map',
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});
