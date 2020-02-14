import get from "lodash/get";

const GetRelatedSubRegions = (sliceData, appdata ) => {
  const subregionUIDs = [
    get(sliceData, "subregion_1.uid"),
    get(sliceData, "subregion_2.uid"),
    get(sliceData, "subregion_3.uid")
  ];

  const subregionData = [];

  subregionUIDs.forEach(sliceSub => {
    if (sliceSub){
      let subregionItem = appdata.subregions.findIndex(appSub => appSub.uid === sliceSub)
      subregionData.push(appdata.subregions[subregionItem].data)
    }
  })

  return subregionData;
};

export default GetRelatedSubRegions;
