import { FloorplansSlices } from "./floorplans";
import { FloorplanSlices } from "./floorplan";
import { GridSlices } from "./grid";
import { locationSlices, locationHOC } from "./location";
import { amenitiesSlices, amenitiesHOC } from "./amenities";
import { furnishedSlices, furnishedHOC } from "./furnished";
import { contactSlices } from "./contact";
import { EntrataWidgetHOC } from "../../entrata-widget";

export const bodyBuilder = {
  floorplans: FloorplansSlices,
  floorplan: FloorplanSlices,
  grid: GridSlices,
  location: locationSlices,
  amenities: amenitiesSlices,
  furnished: furnishedSlices,
  contact: contactSlices
};

export const HOCgetter = {
  overview: EntrataWidgetHOC(undefined),
  location: EntrataWidgetHOC(locationHOC),
  amenities: EntrataWidgetHOC(amenitiesHOC),
  furnished: EntrataWidgetHOC(furnishedHOC),
  contact: EntrataWidgetHOC(undefined)
};
