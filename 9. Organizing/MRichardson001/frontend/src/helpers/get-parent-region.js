import get from "lodash/get";

const GetParentRegion = (property, appdata) => {

  const uid = get(property, "data.sub-regions[0].sub-region.uid");
  let subregionId = null;
  let parentRegion = null;
  
  if (uid) {
    subregionId = (appdata.subregions || []).findIndex(sub => sub.uid === uid);
    if ((subregionId !== null || subregionId !== undefined) && appdata.subregions) {
      parentRegion = get(appdata.subregions[subregionId], 'data.region');
     }
  }
  return parentRegion
};

export default GetParentRegion;
