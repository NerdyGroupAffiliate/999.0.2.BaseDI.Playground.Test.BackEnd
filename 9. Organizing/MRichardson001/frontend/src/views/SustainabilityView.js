/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/SustainabilityView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import PageSubNavView from '../components/PageSubNavView'
import ContentWithFactView from '../components/ContentWithFactView'
import LeedStatsView from '../components/LeedStatsView'
import ListBlocksWithTextBlurbView from '../components/ListBlocksWithTextBlurbView'
import GridSustainabilityView from '../components/GridSustainabilityView'
import ContentBlockWithSpotlightsView from '../components/ContentBlockWithSpotlightsView'
import GreenHomeGuideView from '../components/GreenHomeGuideView'
import FooterView from '../components/FooterView'


let Controller

class SustainabilityView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SustainabilityController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SustainabilityView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== SustainabilityView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/SustainabilityMeta")
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
            <header className="af-class-about-page-header af-class-sustainability">
              <h1 className="af-class-heading-13">Sustainability</h1>
            </header>
            <PageSubNavView.Controller {...this.props} />
            <ContentWithFactView.Controller {...this.props} />
            <LeedStatsView.Controller {...this.props} />
            <ListBlocksWithTextBlurbView.Controller {...this.props} />
            <GridSustainabilityView.Controller {...this.props} />
            <ContentBlockWithSpotlightsView.Controller {...this.props} />
            <section className="af-class-sustainable_billboard">
              <div className="af-class-suatianble-bb-background">
                <div className="af-class-sustainable-billboard-content-blur">
                  <h2 className="af-class-section-tagline af-class-white">Building Positive + Living Well</h2>
                  <p className="af-class-sustainable-bb-description">2018 Multifamily Executive (MFE) Concept Community is an annual program designed to promote best practices in building development by pairing an apartment developer and architecture firm to design a conceptual apartment community. For the past year, AMLI, and world renowned architect, Skidmore, Owings and Merrill (SOM), were selected in 2018 with the theme, <strong>Building Positive + Living Well</strong>. AMLI 900 was selected as a basis for exploring progressive designs, materials, and ideas for a holistic approach to sustainability. The lunch n learn will share the final design and highlight takeaways from the development process. For a sneak peak, check out MFE Concept Community website.</p>
                  <div className="w-embed">
                    <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-spotlight-billboard-descriptive-blur {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n" }} />
                  </div>
                </div>
              </div>
            </section>
            <GreenHomeGuideView.Controller {...this.props} />
            <section className="af-class-giving-back-green">
              <div className="af-class-giving-back-green-container">
                <div className="af-class-giving-back-green-image" />
                <div className="af-class-giving-back-green-content">
                  <div>
                    <h2 className="af-class-section-tagline">Giving Back Green</h2>
                    <p className="af-class-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                    <a href="/#" className="af-class-button af-class-boss af-class-yellow w-inline-block">
                      <div className="af-class-boos-button-label">Button Text</div><img src="/images/right-arrow.svg" alt="" className="af-class-boss-right-arrow" /></a>
                  </div>
                </div>
              </div>
            </section>
            <section className="af-class-sustainable-posts af-class-bg-image">
              <div className="af-class-div-block-260">
                <div className="af-class-div-block-258">
                  <h2 className="af-class-section-tagline af-class-white">In The News</h2>
                  <div className="af-class-div-block-257">
                    <div className="af-class-arrow-chevron-white-circled af-class-left">
                      <div className="af-class-html-embed-21 w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg viewBox="0 0 19 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                          <title>ion-ios-arrow-forward - Ionicons</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="Ionicons" fontSize={49} fontWeight={400}>
                            <g transform="translate(-1163.000000, -1978.000000)" fill="#fff" id="ion-ios-arrow-forward---Ionicons">
                              <text>
                                <tspan x={1163} y={2012}></tspan>
                              </text>
                            </g>
                          </g>
                        </svg></div>
                    </div>
                    <div className="af-class-arrow-chevron-white-circled">
                      <div className="af-class-html-embed-21 w-embed">
                        {/*?xml version="1.0" encoding="UTF-8"?*/}
                        <svg viewBox="0 0 19 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                          {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                          <title>ion-ios-arrow-forward - Ionicons</title>
                          <desc>Created with Sketch.</desc>
                          <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="Ionicons" fontSize={49} fontWeight={400}>
                            <g transform="translate(-1163.000000, -1978.000000)" fill="#fff" id="ion-ios-arrow-forward---Ionicons">
                              <text>
                                <tspan x={1163} y={2012}></tspan>
                              </text>
                            </g>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="af-class-unordered-list-6 w-list-unstyled">
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                    <li className="af-class-list-item-5">
                      <div className="af-class-div-block-263">
                        <div>Oct 24, 2018</div>
                        <div>By Builder and Developer</div>
                      </div>
                      <div className="af-class-div-block-262">
                        <div className="af-class-text-block-81">AMLI Ponce Park Becomes First Multifamily Development in Atlanta to receive Fitwel</div>
                        <div className="af-class-div-block-261">
                          <div className="af-class-yellow-highlight-half">Read full article</div>
                          <div className="af-class-right-arrow--dark w-embed">
                            <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-arrow--read-article {\n  fill: #3f3f3f;\n}\n" }} />
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.75 42.75">
                              <path d="M0,24.62V19.38H32.5l-14.88-15L21.38.62,42.75,22,21.38,43.38,17.5,39.62l15-15Z" transform="translate(0 -0.63)" className="af-class-arrow--read-article" />
                            </svg></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="af-class-div-block-400" />
            </section>
            <section className="af-class-div-block-424">
              <div className="af-class-div-block-425">
                <h2 className="af-class-section-tagline af-class-white">Tagline re: Sustainability is a core value of AMLI</h2>
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

export default SustainabilityView

/* eslint-enable */