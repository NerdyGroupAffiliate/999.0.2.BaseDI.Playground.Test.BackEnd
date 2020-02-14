import React from "react";

const ExtractMeta = props => {
  if (!props || !props.data) {
    return [];
  }
  const isBlogPost = props.type === "blog_post";
  const page = props.data;
  const keys = [
    "page_title",
    "og_description",
    "og_see_also",
    "og_site_name",
    "og_title",
    "meta_description",
    "meta_canonical",
    "social_share_image",
    "twitter_description",
    "twitter_title",
  ];
  const output = [];
  output.push(
    <meta
      property="og:type"
      content={isBlogPost ? "article" : "website"}
    />
  );
  keys.forEach(key => {
    if (!!page[key]) {
      if (key === "page_title") {
        output.push(<title key={key}>{page[key]}</title>);
      } else if (key === "meta_canonical") {
        output.push(
          <link key={`${key}_canonical`} rel="canonical" href={page[key].url} />
        );
        output.push(
          <link
            key={`${key}_canonical_og`}
            roperty="og:url"
            content={page[key].url}
          />
        );
      } else if (key === "meta_description") {
        output.push(<meta key={key} name="description" content={page[key]} />);
      } else if (key === "social_share_image") {
        if (page && page[key] && page[key].url) {
          output.push(
            <meta
              key={`${key}_og`}
              property="og:image"
              content={page[key].url}
            />
          );
          output.push(
            <meta
              property="og:image:width"
              content="1000"
            />
          );
          output.push(
            <meta
              property="og:image:height"
              content="500"
            />
          );
          output.push(
            <meta
              key={`${key}_twitter`}
              property="twitter:image"
              content={page[key].url}
            />
          );
        }
      } else {
        output.push(
          <meta
            key={key}
            property={key.replace(new RegExp("_"), ":")}
            content={page[key]}
          />
        );
      }
    }
  });
  return output;
};


export const ExtractMetaProperty = (page, subroute) => {
  if (!page) {
    return [];
  }
  const keys = [
    `${subroute}_page_title`,
    `${subroute}_meta_description`,
    `${subroute}_social_share_image`,
    `${subroute}_open_graph_description`,
    `${subroute}_social_share_image`,
    `${subroute}_open_graph_title`
  ];
  const output = [];
  output.push(
    <meta
      property="og:type"
      content="website"
    />
  );
  keys.forEach(fullKey => {
    const key = fullKey.replace(`${subroute}_`, '');
    if (!!page[fullKey]) {
      if (key === "page_title") {
        output.push(<title key={key}>{page[fullKey]}</title>);
      } else if (key === "meta_canonical") {
        output.push(
          <link key={`${key}_canonical`} rel="canonical" href={page[fullKey].url} />
        );
        output.push(
          <link
            key={`${key}_canonical_og`}
            roperty="og:url"
            content={page[fullKey].url}
          />
        );
      } else if (key === "meta_description") {
        output.push(<meta key={key} name="description" content={page[fullKey]} />);
      } else if (key === "social_share_image") {
        if (page && page[fullKey] && page[fullKey].url) {
          output.push(
            <meta
              key={`${key}_og`}
              property="og:image"
              content={page[fullKey].url}
            />
          );
          output.push(
            <meta
              property="og:image:width"
              content="1000"
            />
          );
          output.push(
            <meta
              property="og:image:height"
              content="500"
            />
          );
          output.push(
            <meta
              key={`${key}_twitter`}
              property="twitter:image"
              content={page[fullKey].url}
            />
          );
        }
      } else {
        output.push(
          <meta
            key={key}
            property={key.replace(new RegExp("_"), ":")}
            content={page[fullKey]}
          />
        );
      }
    }
  });
  return output;
};


export default ExtractMeta;
