const GetTags = (tagObj) => {
  let tagNames = [];
  if (!tagObj) {
    return null;
  }
  tagObj.forEach(tag => {
    if (tag.tag.slug) {
      tagNames.push(tag.tag.slug);
    }
  })
  return tagNames;
};

export default GetTags;
