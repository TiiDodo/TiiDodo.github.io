function init() {
  const parcThabor = {
   lat : -12.0439,
   lng : -77.0281
  }

  const zoomLevel = 7;

  const map = L.map('map').setView([parcThabor.lat, parcThabor.lng], zoomLevel);
  const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidGlpZG9kbzExIiwiYSI6ImNreTk4ZzFheDAyZncydnM5dTN3Z3dnc2wifQ.-jxx1agJ1UldTfgMmcgo8g'
  });
  var marker = L.marker([parcThabor.lat,parcThabor.lng]).addTo(map);
  mainLayer.addTo(map);

}
