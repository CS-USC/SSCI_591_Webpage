var map = L.map("map").setView([37.2, -119.5], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
}).addTo(map);

L.circleMarker([37.5123, -121.6994]).addTo(map);
L.circleMarker([38.3539, -119.6256]).addTo(map);
L.circleMarker([38.6767, -120.0855]).addTo(map);
L.circleMarker([40.1259, -121.4048]).addTo(map);
L.circleMarker([38.4831, -120.0766]).addTo(map);
L.circleMarker([39.3835, -122.7522]).addTo(map);
L.circleMarker([37.8817, -121.9143]).addTo(map);
L.circleMarker([41.7961, -123.6723]).addTo(map);
L.circleMarker([38.8575, -119.9001]).addTo(map);
L.circleMarker([37.0942, -118.5145]).addTo(map);
L.circleMarker([39.7268, -122.8726]).addTo(map);
L.circleMarker([41.1832, -123.4108]).addTo(map);
L.circleMarker([32.6216, -116.0912]).addTo(map);
L.circleMarker([36.5786, -118.2920]).addTo(map);
L.circleMarker([34.8137, -119.1667]).addTo(map);
L.circleMarker([35.9060, -120.2761]).addTo(map);
L.circleMarker([39.3835, -122.7522]).addTo(map);
L.circleMarker([41.1471, -120.1258]).addTo(map);
L.circleMarker([34.2892, -117.6464]).addTo(map);
L.circleMarker([37.6891, -119.1996]).addTo(map);
L.circleMarker([37.9240, -122.5969]).addTo(map);
L.circleMarker([37.7782, -119.3095]).addTo(map);
L.circleMarker([39.8462, -122.9646]).addTo(map);
L.circleMarker([36.8905, -121.1776]).addTo(map);
L.circleMarker([41.2835, -120.2008]).addTo(map);
L.circleMarker([37.6341, -118.2557]).addTo(map);
L.circleMarker([36.1456, -121.4191]).addTo(map);
L.circleMarker([38.6679, -122.6273]).addTo(map);
L.circleMarker([39.4329, -120.3650]).addTo(map);
L.circleMarker([33.7105, -117.5341]).addTo(map);
L.circleMarker([39.2796, -120.0058]).addTo(map);
L.circleMarker([39.9941, -120.6275]).addTo(map);
L.circleMarker([33.8148, -116.6795]).addTo(map);
L.circleMarker([38.6497, -121.0992]).addTo(map);
L.circleMarker([36.3696, -120.6446]).addTo(map);
L.circleMarker([34.0992, -116.8249]).addTo(map);
L.circleMarker([33.3152, -116.5798]).addTo(map);
L.circleMarker([37.7383, -122.4548]).addTo(map);
L.circleMarker([37.4896, -121.4691]).addTo(map);
L.circleMarker([35.0363, -119.7603]).addTo(map);
L.circleMarker([37.2806, -122.1629]).addTo(map);
L.circleMarker([34.6972, -119.6532]).addTo(map);
L.circleMarker([37.3468, -121.6300]).addTo(map);
L.circleMarker([37.2237, -122.0927]).addTo(map);
L.circleMarker([40.4882, -121.5050]).addTo(map);
L.circleMarker([39.4496, -120.3640]).addTo(map);
L.circleMarker([41.4090, -122.1949]).addTo(map);
L.circleMarker([38.4001, -122.1058]).addTo(map);
L.circleMarker([38.8025, -122.7476]).addTo(map);
L.circleMarker([37.3224, -121.4085]).addTo(map);
L.circleMarker([39.2063, -121.8213]).addTo(map);
L.circleMarker([40.4456, -121.5596]).addTo(map);
L.circleMarker([41.3197, -122.4791]).addTo(map);
L.circleMarker([36.5786, -118.2920]).addTo(map);
L.circleMarker([37.7394, -119.2716]).addTo(map);
L.circleMarker([34.8128, -119.1454]).addTo(map);
L.circleMarker([38.9070, -122.4164]).addTo(map);
L.circleMarker([39.6076, -121.0152]).addTo(map);

function showLocation(lat, lng) {
    document.getElementById("output").textContent =
        "Latitude: " + lat.toFixed(4) + ", Longitude: " + lng.toFixed(4);
}

map.on("click", function(e) {
    showLocation(e.latlng.lat, e.latlng.lng);
});
