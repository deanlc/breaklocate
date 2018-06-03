mapboxgl.accessToken = 'pk.eyJ1IjoiZGVhbmxjIiwiYSI6ImNqY3VmeThnczB3cngyd3Z0N2lmbmJodnEifQ.5h5JP8RWdvtMWJQCi94ITg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-79.4512, 43.6568],
    zoom: 7,
    pitch: 60, // pitch in degrees
    bearing: -60, // bearing in degrees
});


$('img').attr('draggable', false);
var searchbar = $('#searchbar');
var search = $('#search');
var information = $('#information');
var circleL = $('.circle-large');
var circleS = $('.circle-small');

var hotelLogoOne = $('#One');
var hotelLogoTwo = $('#Two');
var hotelLogoThree = $('#Three');
var hotelLogoFour = $('#Four');

var hotelOne = $('#hotelOne');
var hotelTwo = jQuery('#hotelTwo');
var hotelThree = jQuery('#hotelThree');
var hotelFour = jQuery('#hotelFour');

var oneInfo = $('#oneInfo');
var twoInfo = $('#twoInfo');
var threeInfo = $('#threeInfo');
var fourInfo = $('#fourInfo');

var hotelInfo = $('#informationHotel');
var button = $('#viewButton');

setTimeout(typeWriter, 2000);

setTimeout(mapTour, 100);

function mapTour(){
map.flyTo({
        center: [
            -74.50 + (Math.random() - 0.5) * 80,
            40 + (Math.random() - 0.5) * 10],
            speed: 0.05
    });    
}


var i = 0;
var txt = 'Greenwich, London';
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greenwich").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(moveMap, 4000);

function moveMap() {
    search.fadeOut(500);
    setTimeout(unhide, 4000);
    map.flyTo({
        center: [-0.06624168843907796,51.473177909340876],
        zoom: 12,
        pitch: 0,
        bearing: 0});
    
    function unhide() {
    information.fadeIn(500);
    circleS.fadeIn(500);
    circleL.fadeIn(500);
    searchbar.fadeIn(500);
    }
    
    
}

oneInfo.click(function (){
    hotelOne.fadeIn(100);
    hotelTwo.hide();
    hotelThree.hide();
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on AirBnB');
});

twoInfo.click(function (){
    hotelOne.hide();
    hotelTwo.fadeIn(100);
    hotelThree.hide();
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on TravelLodge');
});
threeInfo.click(function (){
    hotelOne.hide();
    hotelTwo.hide();
    hotelThree.fadeIn(100);
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on AirBnB');
});
fourInfo.click(function (){
    hotelOne.hide();
    hotelTwo.hide();
    hotelThree.hide();
    hotelFour.fadeIn(100);
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View Hotel Website');
});

hotelLogoOne.click(function (){
    hotelOne.fadeIn(100);
    hotelTwo.hide();
    hotelThree.hide();
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on AirBnB');
});

hotelLogoTwo.click(function (){
    hotelOne.hide();
    hotelTwo.fadeIn(100);
    hotelThree.hide();
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on TravelLodge');
});
hotelLogoThree.click(function (){
    hotelOne.hide();
    hotelTwo.hide();
    hotelThree.fadeIn(100);
    hotelFour.hide();
    button.hide();
    $('#viewButton').fadeIn(100);
    button.text('View on AirBnB');
});
hotelLogoFour.click(function (){
    hotelOne.hide();
    hotelTwo.hide();
    hotelThree.hide();
    hotelFour.fadeIn(100);
    
    button.hide();
    button.fadeIn(100);
    button.text('View Hotel Website');
});


button.click(function(){
   location.reload(); 
});

