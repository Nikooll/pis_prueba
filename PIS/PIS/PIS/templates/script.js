function iniciarMap(){
    var coord = {lat:-4.0329396 ,lng: -79.2025477};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      content: 'Universidad Nacional de Loja',
      map: map
    });
    var marker = new google.maps.Marker({
        position: {lat:-3.9856023 ,lng: -79.2031953},
        content: 'Centro de Gestión Integral de Residuos Solidos de Loja',
        map: map
      });
      var marker = new google.maps.Marker({
        position: {lat:-4.0305932 ,lng: -79.2213538},
        content: 'Contenedor Municipal Basura',
        map: map
      });
}