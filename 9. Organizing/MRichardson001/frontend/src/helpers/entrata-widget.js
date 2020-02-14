import React from "react";
import get from "lodash/get";
import { canUseDOM } from "./utils";

const composeEntrataScript = entrataDomain => `
  var $ = $ || function(a) {
    return '';
  }
  var ppcbConfig={bottom: 5, right:5};
  !function(e) {
    if (!!document.getElementById("entrataMultiWidget")) {
      document.getElementById("entrataMultiWidget").remove();
    }
    var t = document.createElement("script"),
    n=function(){
      var removeAllFromDOM = function(id) {
        var elem = document.getElementById(id);
        while(!!elem) {
          elem.remove();
          elem = document.getElementById(id);
        }
      }
      removeAllFromDOM('ppcb_btn');
      removeAllFromDOM('ppcb_container');
      removeAllFromDOM('ppcb_notification');
      ppcb.render({
        subdomain:"//${entrataDomain.replace(
          "prospectportal.com",
          ""
        )}.prospectportal.com",
        query:"is_responsive_snippet=1&snippet_type=contact_button"
      })
    };
    t.src="//commoncdn.entrata.com/website_templates/_assets/_common/contact_btn_controller.min.js?ver=381038",
    t.defer=!0,
    t.async=!0,
    t.id="entrataMultiWidget",
    t.readyState ? t.onreadystatechange = function(){
        ("loaded"===t.readyState||"complete"===t.readyState) && n()
      } :
      t.onload=n;
    if(t.id === "entrataMultiWidget") {
      document.head.appendChild(t)
    }
  } (window);
`;

export default class EntrataWidget extends React.Component {

  componentDidMount() {
    this.scripti18n = document.createElement("script");
    this.script = document.createElement("script");
    this.script.type = "text/javascript";
    this.scripti18n.type = "text/javascript";
    this.script.async = false;
    this.scripti18n.async = false;
    this.script.id = "entratamultitriggerscript";
    this.scripti18n.id = "entratai18nscript";
    this.loadedi18n = false;
    this.loadedScripts = false;
    this.mountEntrataScript();
  }

  componentDidUpdate() {
    this.mountEntrataScript();
  }

  componentWillUnmount() {
    this.unMountEntrataScript();
  }

  mountEntrataScript = () => {
    this.unMountEntrataScript();
    const entrataDomain = get(this.props, "property.data.entrata_domain");
    // const entrataId = get(this.props, "property.data.entrata_id");
    if (
      !!this.script &&
      !this.script.innerHTML.length &&
      !this.loadedScripts &&
      !this.loadedi18n &&
      !!entrataDomain
    ) {
      this.scripti18n.src =
        "//commoncdn.entrata.com/javascript/i18n/i18n.min.js?ver=355442";
      const elemIntl = document.getElementById("entratai18nscript");
      if (!!elemIntl) {
        elemIntl.remove();
      }
      document.head.appendChild(this.scripti18n);
      this.loadedi18n = true;
      this.scripti18n.onload = () => {
        this.script.innerHTML = composeEntrataScript(entrataDomain);
        const elemTrigger = document.getElementById("entratamultitriggerscript");
        if (!!elemTrigger) {
          elemTrigger.remove();
        }
        document.head.appendChild(this.script);
        this.loadedScripts = true;
      };
    }
  };

  unMountEntrataScript = () => {
    if (this.script && !!this.script.innerHTML) {
      try {
        document.head.removeChild(this.script);
        document.head.removeChild(this.scripti18n);
      } catch (e) {
        //pass
      }
    }
    const removeAllFromDOM = id => {
      let elem = document.getElementById(id);
      while(!!elem) {
        elem.remove();
        elem = document.getElementById(id);
      }
    }

    if(process.browser && canUseDOM) {
      document.head.children.forEach(elem => {
        if(
          elem.src === "https://commoncdn.entrata.com/website_templates/_assets/_common/contact_btn_controller.min.js?ver=347147" ||
          elem.src === "http://commoncdn.entrata.com/website_templates/_assets/_common/contact_btn_controller.min.js?ver=347147") {
          elem.remove()
        }
      })
    }

    removeAllFromDOM('ppcb_btn');
    removeAllFromDOM('ppcb_container');
    removeAllFromDOM('ppcb_notification');
    removeAllFromDOM('entrataMultiWidget');
    removeAllFromDOM('entratai18nscript');
    removeAllFromDOM('entratamultitriggerscript');
  };
}

export const EntrataWidgetHOC = composable => WrappedComponent => {
  class EntrataWidgetComponent extends EntrataWidget {

    render() {
      if (!canUseDOM) {
        return null;
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }
  return composable
    ? composable(EntrataWidgetComponent)
    : EntrataWidgetComponent;
};
