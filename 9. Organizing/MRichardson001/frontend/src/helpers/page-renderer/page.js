import React from "react";
import get from "lodash/get";
import componentMapper from "../component-mapper";
import GetRelatedSubRegions from "../get-related-sub-regions";

import GroupPropertiesByRegion from "../group-properties-by-region";
import CareersDisclaimerController from "../../controllers/CareersDisclaimerController";
import { LoadScriptNext } from "@react-google-maps/api";
import config from "../../config";
import { canUseDOM } from "../../helpers/utils";

export default function _pageRenderer(page, Components, configs, refresh) {
  if (canUseDOM) {
    localStorage.removeItem("referralPage");
    if (page && page.type === "sub-region") {
      localStorage.setItem("referralPage", JSON.stringify(page));
    }
  };

  const slices = get(page, "data.body") || [];
  const SliceComp = slices
    .map((slice, index) => {
      const Component = componentMapper(slice.slice_type);
      if (!Component) {
        return null;
      }

      return (
        <Component
          key={`${slice.slice_type}_${index}`}
          data={slice}
          subRegions={
            slice.slice_type === "related_areas_band"
              ? GetRelatedSubRegions(slice.primary, configs.appdata)
              : null
          }
          appdata={configs.appdata}
          slice={slice}
          page={page}
        />
      );
    })
    .filter(slice => !!slice);

  let RelatedAreas = null;
  let RegionHeaderMap = null;
  let ContactForm = null;

  if (page.uid === "contact") {
    try {
      ContactForm = require("../../controllers/ContactFormController");
    } catch (e) {
      console.log("Error:", e);
      ContactForm = null;
    }
  }
  if (ContactForm && ContactForm.default) {
    ContactForm = ContactForm.default;
  }

  if (page.type === "region") {
    try {
      RelatedAreas = require("../../controllers/ListRelatedAreasController");
    } catch (e) {
      RelatedAreas = require("../../components/ListRelatedAreasView");
    }
    try {
      RegionHeaderMap = require("../../controllers/RegionHeaderMapController");
    } catch (e) {
      RegionHeaderMap = require("../../components/RegionHeaderMapView");
    }
  } else if (page.type === "sub-region") {
    try {
      RegionHeaderMap = require("../../controllers/SubregionHeaderController");
    } catch (e) {
      RegionHeaderMap = null;
    }
  }
  if (RelatedAreas && RelatedAreas.default) {
    RelatedAreas = RelatedAreas.default;
  }

  if (RegionHeaderMap && RegionHeaderMap.default) {
    RegionHeaderMap = RegionHeaderMap.default;
  }
  let Blog = null;
  let tagNames = [];
  let regionNames = [];
  if (page.type === "blog_list_page") {
    try {
      Blog = require("../../controllers/BlogController");
      tagNames = configs.appdata.tags.map(tag => ({
        value: tag.data.tag.replace(/ /gi, "-").toLowerCase(),
        label: tag.data.tag,
        id: tag.id,
        tag_color: tag.data.tag_color
      }));
      regionNames = configs.appdata.regions.map(region => ({
        value: region.uid,
        label: region.data.name,
        id: region.id
      }));
    } catch (e) {}
  }
  if (Blog && Blog.default) {
    Blog = Blog.default;
  }
  let BlogPostFull = null;
  if (page.type === "blog_post") {
    try {
      BlogPostFull = require("../../controllers/BlogPostFullController");
    } catch (e) {}
  }
  if (BlogPostFull && BlogPostFull.default) {
    BlogPostFull = BlogPostFull.default;
  }
  let careersPage = null;
  if (
    page.uid === "careers" ||
    (!!page.data.parent && page.data.parent.uid === "careers")
  ) {
    careersPage = true;
  }

  return (
    <div className={configs.styles.container}>
      {!!Components.Metadata ? <Components.Metadata page={page} /> : null}
      {!!Components.Nav ? (
        <Components.Nav
          key={`nav`}
          onMeasure={(width, height) =>
            configs.updateSize("nav", width, height)
          }
          appdata={configs.appdata}
          links={configs.headerNav}
          page={page}
          homepage={configs.navigation === "Home Page"}
        />
      ) : null}
      {!!Blog ? (
        <Blog
          page={page}
          blogPosts={configs.appdata.blogposts}
          regions={regionNames}
          tags={tagNames}
        />
      ) : null}
      {!!BlogPostFull ? (
        <BlogPostFull page={page} tags={configs.appdata.tags} appdata={configs.appdata} />
      ) : null}
      {!!Components.Header ? (
        <Components.Header
          key={`header`}
          links={configs.headerNav}
          appdata={configs.appdata}
          page={{ ...page.data, uid: page.uid, id: page.id }}
          route={configs.subroute}
          sizes={configs.state.size}
          setLoaded={configs.setLoaded}
        />
      ) : null}
      <div style={{ backgroundColor: "white" }}>
        {!!RegionHeaderMap ? (
          <LoadScriptNext
            id="script-loader"
            loadingElement={<div style={{ height: '90vh' }} />}
            googleMapsApiKey={config.GOOGLE_MAPS_API_KEY}
            libraries={config.GOOGLE_MAPS_LIBRARIES}
          >
            <RegionHeaderMap
              key={`header-map`}
              data={page.data}
              page={page}
              appdata={configs.appdata}
              relatedSubRegions={configs.appdata.subregions.filter(
                item => item.data.region.id === page.id
              )}
            />
          </LoadScriptNext>
        ) : null}
        {!!ContactForm ? (
          <ContactForm
            key={`form`}
            data={configs.appdata}
            regionProperties={GroupPropertiesByRegion(configs.appdata)}
          />
        ) : null}
        {SliceComp}
        {!!RelatedAreas ? (
          <RelatedAreas
            key={`related-areas`}
            data={page.data}
            appdata={configs.appdata}
          />
        ) : null}
        {careersPage ? <CareersDisclaimerController /> : null}
      </div>
      {Components.Footer ? (
        <Components.Footer
          key={`footer`}
          links={configs.footerNav}
          page={page}
        />
      ) : null}
    </div>
  );
}
