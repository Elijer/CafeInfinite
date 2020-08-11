function setupMap(){
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcFvCdo_5DPAUfRdhVq8sttNxwLAhLpUI&callback=initMap';
    script.defer = true;

    let IndianaPA = {lat: 40.6215, lng: -79.1525}
    
    // Attach your callback function to the `window` object
    window.initMap = function() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: IndianaPA,
        zoom: 16
      });
    };
    
    // Append the 'script' element to 'head'
    document.head.appendChild(script);
  }

  module.exports = setupMap