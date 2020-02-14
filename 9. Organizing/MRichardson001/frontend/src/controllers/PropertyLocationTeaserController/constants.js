export const mapOptions = {
  options: {
    streetViewControl: false,
    scaleControl: false,
    mapTypeControl: false,
    panControl: false,
    zoomControl: false,
    rotateControl: false,
    fullscreenControl: false,
    draggable: false
  },
  styles: [
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]
};
