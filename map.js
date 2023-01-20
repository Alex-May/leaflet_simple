let map = L.map('metrocdmx').setView([19.4326, -99.1332], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(estaciones).bindPopup(function (layer) {
    return "<strong>NOMBRE: </strong>" + layer.feature.properties.NOMBRE +
        "<br>" + "<strong>LINEA: </strong>" + layer.feature.properties.LINEA
}).addTo(map);

L.geoJson(lineas).bindPopup(function (layer) {
    return "<strong>RUTA: </strong>" + layer.feature.properties.RUTA +
        "<br>" + "<strong>LINEA: </strong>" + layer.feature.properties.LINEA
        + "<br>" + "<strong>TRAMO: </strong>" + layer.feature.properties.TRAMO
}).addTo(map);