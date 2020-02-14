const GetGeolocation = (opts = {}, callback) => {
  if (
    navigator &&
    navigator.geolocation &&
    navigator.geolocation.getCurrentPosition
  ) {
    const options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
      ...opts
    };
    const id = navigator.geolocation.watchPosition(
      position => {
        callback(null, position);
        try {
          navigator.geolocation.clearWatch(id);
        } catch (e) {}
      },
      error => callback(error, null),
      options
    );
  }
};

export default GetGeolocation;
