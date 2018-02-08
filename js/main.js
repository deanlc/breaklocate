// Searchbar

var searchbar = jQuery('#searchbar');
var search = jQuery('#search');
var information = jQuery('#information');

searchbar.click(function (){
    search.hide();
});

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhbmxjIiwiYSI6ImNqY3VmeThnczB3cngyd3Z0N2lmbmJodnEifQ.5h5JP8RWdvtMWJQCi94ITg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 13
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


