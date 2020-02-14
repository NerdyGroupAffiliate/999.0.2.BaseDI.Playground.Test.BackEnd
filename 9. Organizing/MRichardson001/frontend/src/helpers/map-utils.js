import GroceriesIcon from "../assets/icons/Groceries.svg";
import EntertainmentIcon from "../assets/icons/Entertainment.svg";
import RestaurantsIcon from "../assets/icons/Restaurants.svg";
import KeyBuildingsIcon from "../assets/icons/KeyBuildings.svg";
import PerksIcon from "../assets/icons/Perks.svg";
import TransportationIcon from "../assets/icons/Transportation.svg";

export const getIcon = type => {
  switch (type) {
    case "restaurants":
      return RestaurantsIcon;
    case "perks":
      return PerksIcon;
    case "transportation":
      return TransportationIcon;
    case "shopping":
      return GroceriesIcon;
    case "entertainment":
      return EntertainmentIcon;
    default:
      return null;
  }
};

export const mapOptions = {
  styles: [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
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

export const placesFiller = type => {
  switch (type) {
    case "restaurants":
      return ["restaurant"];
    case "groceries":
      return ["bakery", "convenience_store", "supermarket"];
    case "transportation":
      return [
        "transit_station",
        "bus_station",
        "train_station",
        "subway_station"
      ];
    case "shopping":
      return [
        "shopping_mall",
        "shoe_store",
        "department_store",
        "bicycle_store"
      ];
    case "entertainment":
      return [
        "bar",
        "movie_theater",
        "art_gallery",
        "stadium",
        "park",
        "amusement_park",
        "aquarium"
      ];
    default:
      return [];
  }
};

export class POIPlace {
  id = "";
  name = "";
  address = "";
  latitude = 0;
  longitude = 0;
  phone = "";
  hour = "";
  website = "";

  constructor({
    id,
    name,
    address,
    latitude,
    longitude,
    phone,
    hour,
    website
  }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.phone = phone;
    this.hour = hour;
    this.website = website;
  }
}

export class PropertyPlace {
  constructor({ data: { amli_id, longitude, latitude, body } }) {
    this.amli_id = amli_id;
    this.longitude = longitude;
    this.latitude = latitude;
    this.body = body;
  }
}

export const gmapsPlacesFields = [
  'name',
  'formatted_address',
  'photos',
  'name',
  'text',
  'website',
  'place_id',
  'location',
  'geometry',
  'id',
]

export {
  GroceriesIcon,
  EntertainmentIcon,
  RestaurantsIcon,
  KeyBuildingsIcon,
  PerksIcon
};
