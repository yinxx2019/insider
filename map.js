var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
       center: {lat: 39.9485, lng: 116.4386},
       zoom: 13,
       mapTypeId: google.maps.MapTypeId.HYBRID
    });  
         
    var infowindow = new google.maps.InfoWindow();

    map.data.addListener('click', function(event) {
       var name = event.feature.getProperty("name");
       var desc = event.feature.getProperty("description");
       var hours = event.feature.getProperty("hours");
       var menu = event.feature.getProperty("menu");
       var link = event.feature.getProperty("weblink");
       infowindow.setContent('<h2>' + name + '</h2>' + desc + hours + '<h3>Things to Order</h3>' + menu + '<a href=' + link + ' target="_blank"' + '>Visit their website</a>');
       infowindow.setPosition(event.feature.getGeometry().get());
       infowindow.setOptions({pixelOffset: new google.maps.Size(0,-30)});
       infowindow.open(map);
    });
         
    map.data.loadGeoJson('geo.json'); 
    map.data.setStyle(function(feature) {
        return {icon: feature.getProperty('icon')};
    });
};