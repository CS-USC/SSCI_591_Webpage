var map = L.map("map").setView([37.2, -119.5], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19
}).addTo(map);

function showLocation(lat, lng) {
    document.getElementById("output").textContent =
        "Latitude: " + lat.toFixed(4) + ", Longitude: " + lng.toFixed(4);
}

map.on("click", function(e) {
    showLocation(e.latlng.lat, e.latlng.lng);
});