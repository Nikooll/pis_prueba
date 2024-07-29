function iniciarMap() {
  var coord = {lat: -4.0329396, lng: -79.2025477};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
  });


  function addMarker(coords, title, imageUrl) {
      var marker = new google.maps.Marker({
          position: coords,
          map: map
      });
      
      var infoWindowContent = '<div style="max-width: 200px;">' +
                              '<h2 style="font-size: 16px; margin: 0;">' + title + '</h2>' +
                              '<img src="' + imageUrl + '" alt="' + title + '" style="width: 100%; height: auto; margin-top: 5px;">' +
                              '</div>';
      
      var infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent
      });

      marker.addListener('click', function() {
          infoWindow.open(map, marker);
      });


      infoWindow.open(map, marker);
  }

  addMarker(
      {lat: -4.0329396, lng: -79.2025477}, 
      'Universidad Nacional de Loja', 
      'https://unl.edu.ec/sites/default/files/galeria/2022/02/b.jpg'
  );
  addMarker(
      {lat: -3.9856023, lng: -79.2031953}, 
      'Centro de Gestión Integral de Residuos Solidos de Loja', 
      'https://www.loja.gob.ec/files/noticias/2018/06/el_0.jpg'
  );
  addMarker(
      {lat: -4.0305932, lng: -79.2213538}, 
      'Contenedor Municipal de Basura', 
      'https://www.loja.gob.ec/files/noticias/2018/07/municipio_0.jpg'
  );
}

