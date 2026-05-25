  mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
   style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates,
    zoom: 9
});

function changeStyle(style){
    const styles = {
        streets: "mapbox://styles/mapbox/streets-v12",
        dark: "mapbox://styles/mapbox/dark-v11",
        light: "mapbox://styles/mapbox/light-v11",
        satellite: "mapbox://styles/mapbox/satellite-v9"
    };

    map.setStyle(styles[style]);
}
const marker = new mapboxgl.Marker({ color: 'red' })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({offset: 25})
   .setHTML(
        `<h4>${listing.title}</h4>
         <p>${listing.location}</p>
         <p>Exact Location will be provided after booking!</p>`
      )
  )
  .addTo(map);
