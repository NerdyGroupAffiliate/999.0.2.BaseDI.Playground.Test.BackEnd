import get from "lodash/get";
import GetPropertyFullRoute from "./get-full-property-route";

export const handlePrismicLink = (
  props,
  link,
  extra = {},
  text = undefined
) => {
  if (!link) {
    return {};
  }

  const linkType = get(link, "link_type");
  const url = get(link, "url");
  const slug = get(link, "slug");
  const uid = get(link, "uid");
  const property = get(extra, "propertyData");
  delete extra.propertyData;
  const type = get(link, "type");
  const isBroken = get(link, "isBroken");
  const target = get(link, "target");
  if (isBroken) {
    return {};
  }

  const getParentPage = (url, slug) => {
    const careers = [
      "culture",
      "benefits",
      "professional-development",
      "giving-back",
      "find-your-career",
      "career-development"
    ];
    const about = [
      "leadership",
      "development",
      "retail",
      "corporate-governance"
    ];

    if (careers.includes(url) || careers.includes(slug)) {
      return "careers"
    } else if (about.includes(url) || about.includes(slug)) {
      return "about-us"
    }

    return null
  };
  const onClickBase = (type, url) => e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (type === "window") {
      if (url) {
        window.open(url);
      }
    } else if (type === "target_blank") {
      if (url) {
        window.location.href = `${url}`;
      }
    } else {
      if (url && props && props.history) {
        props.history.push(url, extra);
      }
    }
  };

  const contactFormURLBuilder = (type) =>
    property
      ? `/contact?topic=community&propertyUid=${property.uid}&propertyName=${
          property.data.name
        }&residentOption=nonResident${ type ? `&nonResidentOptionSelect=${type}`: ''}`
      : `/contact?topic=community&residentOption=nonResident${ type ? `&nonResidentOptionSelect=${type}`: ''}`;

  if (!url && !slug && !uid && !!text && !!text.match(/tour/gi)) {
    return {
      href: "#tour",
      onClick: e => {
        if (e) {
          e.preventDefault();
        }
        try {
          if (!!window && window.ppcb) {
            window.ppcb.open("schedule-tour");
          }
        } catch (e) {
          onClickBase("router", contactFormURLBuilder("tour"))(null);
        }
      },
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        try {
          if (!!window && window.ppcb) {
            window.ppcb.open("schedule-tour");
          }
        } catch (e) {
          onClickBase("router", contactFormURLBuilder("tour"))(null);
        }
      },
      tabIndex: 0
    };
  } else if (!url && !slug && !uid && !!text) {
    let type;
    if (text === "goDark") {
      type = "tour"
    } else if (text === "short-term-housing") {
      type = "short-term-housing"
    }

    return {
      href: contactFormURLBuilder(type),
      onClick: e => {
        if (e) {
          e.preventDefault();
        }
        onClickBase("router", contactFormURLBuilder(type))(null);
      },
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        onClickBase("router", contactFormURLBuilder(type))(null);
      },
      tabIndex: 0
    }
  }

  if ((linkType === "Web" && target === "_blank") || linkType === "Media") {
    return {
      href: url,
      onClick: onClickBase("window", url),
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        onClickBase("window", url)(e);
      },
      tabIndex: 0
    };
  } else if (linkType === "Web" && target !== "_blank") {
    return {
      href: url,
      onClick: onClickBase("target_blank", url),
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        onClickBase("target_blank", url)(e);
      },
      tabIndex: 0
    };
  } else if (linkType === "Document") {

    let urlProcessed = isBroken
      ? "/not-found"
      : (uid && `/${uid}`) || (slug && `/${slug}`);

    if (type === "property" && props.appdata) {
      const property = props.appdata.properties.find( pr => pr.id === link.id);
      urlProcessed = `${GetPropertyFullRoute(property, props.appdata)}/${property.uid}`;
    }
    if (type === "amenities_page") {
      if (props.page && props.page.type === "property"){
        urlProcessed = `${props.location.pathname}/amenities`;
      } else {
        urlProcessed = `${urlProcessed}/amenities`;
      }
    }
    if (type === "standard_page") {
      const parentPage = get(extra, "parentPage") || getParentPage(url, slug);
      delete extra.parentPage;

      urlProcessed = parentPage ? `/${parentPage}${urlProcessed}` : urlProcessed
    }
    return {
      href: urlProcessed,
      onClick: onClickBase("router", urlProcessed),
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        onClickBase("router", urlProcessed)(e);
      },
      tabIndex: 0
    };
  } else {
    if (!url && (slug || uid)) {
      return {
        href: slug || uid,
        onClick: onClickBase("router", slug || uid),
        onKeyDown: e => {
          if (e.keyCode !== 13) {
            return;
          }
          onClickBase("router", slug || uid)(e);
        },
        tabIndex: 0
      };
    }
    return {
      href: url,
      onClick: onClickBase("router", url),
      onKeyDown: e => {
        if (e.keyCode !== 13) {
          return;
        }
        onClickBase("router", url)(e);
      },
      tabIndex: 0
    };
  }
};
