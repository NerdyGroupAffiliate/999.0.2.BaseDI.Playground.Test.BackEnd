import GetParentRegion from "./get-parent-region";

const GroupPropertiesByRegion = (appdata) => {

  const RegionPropertyGroup = [];
  appdata.regions.forEach(region => {
    RegionPropertyGroup.push({
      label: region.data.name,
      uid: region.uid,
      children: [],
    })
  })

  appdata.properties.forEach(property => {
    const parent = GetParentRegion(property, appdata);
    if (parent) {
      const groupItem = RegionPropertyGroup.find(item => item.uid === parent.uid);
      if (groupItem){
        groupItem.children.push({label: property.data.name, value: property.uid, data: property.data})
      }
    }
  })

  return RegionPropertyGroup;

};

export default GroupPropertiesByRegion;


