/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/DevelopmentView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import ImageView from '../components/ImageView'
import ContentIntroDescriptiveView from '../components/ContentIntroDescriptiveView'
import SliderPropertyShowcaseView from '../components/SliderPropertyShowcaseView'
import CertificationsBlockView from '../components/CertificationsBlockView'
import FooterView from '../components/FooterView'


let Controller

class DevelopmentView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DevelopmentController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DevelopmentView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== DevelopmentView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/DevelopmentMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }
    try {
      Metadata = require("../meta/defaultMeta")
      Metadata = Metadata.default || Metadata
    } catch (e) {
      // pass
      Metadata = null;
    }



    return (
      <React.Fragment>
        {Metadata ? <Metadata {...this.props} /> : null}
        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div>
            <NavigationHeaderView.Controller {...this.props} />
            <ImageView.Controller {...this.props} />
            <ContentIntroDescriptiveView.Controller {...this.props} />
            <SliderPropertyShowcaseView.Controller {...this.props} />
            <CertificationsBlockView.Controller {...this.props} />
            <section className="af-class-list-blocks-with-text-blurb">
              <div className="af-class-list-blocks-blurb-content">
                <div className="af-class-list-blocks-b-content-container">
                  <h2 className="af-class-section-title af-class-underlined">only the best</h2>
                  <h3 className="af-class-section-tagline">Some of Our Retail Partners</h3>
                  <p className="af-class-paragraph">We get by with a little help from our friends. AMLI works with businesses across industries to provide the best experience for our residents. </p>
                </div>
              </div>
              <div className="af-class-list-blocks-blurb-logos">
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/orange-theory-fitness3x.png" srcSet="../images/orange-theory-fitness3x-p-500.png 500w, ../images/orange-theory-fitness3x.png 609w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, 12vw" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/bonobos3x.jpg" srcSet="../images/bonobos3x-p-500.jpeg 500w, ../images/bonobos3x.jpg 594w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, 12vw" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/modcloth-logo3x.png" srcSet="../images/modcloth-logo3x-p-500.png 500w, ../images/modcloth-logo3x.png 606w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, 12vw" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/CRU3x.jpg" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/milk--honey-spa3x.png" srcSet="../images/milk--honey-spa3x-p-500.png 500w, ../images/milk--honey-spa3x.png 657w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, 12vw" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="af-class-list-blocks-blurb-column"><img src="/../images/solidcore3x.png" srcSet="../images/solidcore3x-p-500.png 500w, ../images/solidcore3x.png 537w" sizes="(max-width: 479px) 100vw, (max-width: 991px) 28vw, 12vw" alt="" className="af-class-list-blocks-blurb-logo" /></div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n@media and screen (min-width: 1500px) {\n  .af-view .af-class-list-blocks-blurb-column {\n    padding: 50px;\n  }\n}\n" }} />
                </div>
              </div>
            </section>
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default DevelopmentView

/* eslint-enable */