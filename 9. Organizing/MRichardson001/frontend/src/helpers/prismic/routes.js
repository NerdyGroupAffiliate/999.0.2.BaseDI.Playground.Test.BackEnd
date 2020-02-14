import React from "react";
import flatten from "lodash/flatten";
import { Route } from "react-router-dom";
import PageRenderer from "../page-renderer";

import {
    composeAmenities,
    composeContact,
    composeFloorplans,
    composeFurnished,
    composeGrid,
    composeLocation,
    composePricing,
    composeProperty
} from "./property";

const getFullRoute = (page) => {
    let url;
    switch (page.type) {
        case "standard_page":
            if (page && page.data && page.data.parent && page.data.parent.uid){
                url = `/${page.data.parent.uid}/${page.uid}`
            }
            break;
        case "region":
            url = `/apartments/${page.uid}`;
            break;
        case "sub-region":
            if (page && page.data && page.data.region && page.data.region.uid){
                url = `/apartments/${page.data.region.uid}/${page.uid}-apartments`;
            }
            break;
        case "blog_post":
            url = `/blog/${page.uid}`;
            break;
        default:
            url = `/${page.uid}`;
            break;
    }
    return url;
}
const composeRoutes = (page, data, nav, setLoaded) => {
    if (!page) {
        return null;
    }

    const routeParams = [
        `/${page.uid}`,
        ...(page.slugs || []).map(slug => slug ? `/${slug}` : null).filter(slug => !!slug)
    ];
    const formattedRoute = getFullRoute(page);
    if (!!formattedRoute) {
        routeParams.push(formattedRoute);
    }
    return (
        <Route
            key={page.id}
            path={page.uid === "home" ? "/" : routeParams}
            render={props => (
                <PageRenderer page={page} appdata={data} nav={nav} setLoaded={setLoaded} refresh={Math.random().toString(36).substring(7)} {...props} />
            )}
            exact
        />
    );
};
const filterSpecificRenderers = page => {
    return !!page && !!page.data && !!page.type && page.type !== "property";
};

const Routes = (pages, setLoaded) => {

    const footer = (pages || []).filter(
        page => !!page && !!page.data && page.data.show_in_footer_nav === "Yes"
    );
    const topHeader = (pages || []).filter(
        page => !!page && !!page.data && page.data.show_in_top_level_nav === "Yes"
    );
    const subHeader = (pages || []).filter(
        page => !!page && !!page.data && page.data.show_in_sub_level_nav === "Yes"
    );

    const regions = (pages || []).filter(
        page => !!page && !!page.data && !!page.type && page.type === "region"
    );

    const subregions = (pages || []).filter(
        page => !!page && !!page.data && !!page.type && page.type === "sub-region"
    );

    const properties = (pages || []).filter(
        page => !!page && !!page.data && !!page.type && page.type === "property"
    );

    const blogposts = (pages || []).filter(
        page => !!page && !!page.data && !!page.type && page.type === "blog_post"
    );

    const bloglistpages = (pages || []).filter(
        page =>
            !!page && !!page.data && !!page.type && page.type === "blog_list_page"
    );

    const tags = (pages || []).filter(
        page => !!page && !!page.data && !!page.type && page.type === "tag"
    );

    const standard_page = (pages || []).filter(
        page =>
            !!page && !!page.data && !!page.type && page.type === "standard_page"
    );

    const amenities = (pages || []).filter(
        page =>
            !!page && !!page.data && !!page.type && page.type === "amenities_page"
    );
    const location = (pages || []).filter(
        page =>
            !!page && !!page.data && !!page.type && page.type === "location_page"
    );
    const furnished = (pages || []).filter(
        page =>
            !!page && !!page.data && !!page.type && page.type === "short_term_furnished"
    );

    const nav = {
        footer,
        topHeader,
        subHeader,
        regions,
        subregions,
        properties,
        standard_page
    };

    const data = {
        regions,
        subregions,
        properties,
        blogposts,
        bloglistpages,
        tags,
        standard_page,
        amenities,
        location,
        furnished
    };

    return [
        ...pages
            .filter(filterSpecificRenderers)
            .map(page => composeRoutes(page, data, nav, setLoaded)),
        ...flatten(properties.map(property => [
            composeProperty(property, { regions, subregions, properties }, nav),
            composePricing(property, { regions, subregions, properties }, nav),
            composeFloorplans(property, { regions, subregions, properties }, nav),
            composeGrid(property, { regions, subregions, properties }, nav),
            composeLocation(property, data, nav),
            composeAmenities(property, data, nav),
            composeFurnished(property, data, nav),
            composeContact(property, { regions, subregions, properties }, nav)
        ]))
    ];
};

export default Routes;
