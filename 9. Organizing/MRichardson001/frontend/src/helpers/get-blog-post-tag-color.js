const GetTagColor = (tagObj, tagData) => {
  let tagNames = [];

  if (!tagObj || !tagData) {
    return null;
  }
  tagObj.forEach(tag => {
    tagData.forEach(tagData => {

      const tagValue = tagData.value || tagData.uid;
      const tagColorData = tagData.tag_color || (tagData.data && tagData.data.tag_color);
      const tagSlug = tag.tag.slug;
      
      if (tagSlug === tagValue) {
        tagNames.push({tagColor: tagColorData, tag: tagSlug})
      }
    })
  })

  return tagNames;
};

export default GetTagColor;
