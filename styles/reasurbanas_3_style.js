var size = 0;
var placement = 'point';

var style_reasurbanas_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "9.1px \'Arial\', sans-serif";
    var labelFill = "#6e6d6d";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NOM_MAN") !== null) {
        labelText = String(feature.get("NOM_MAN"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(252,252,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
