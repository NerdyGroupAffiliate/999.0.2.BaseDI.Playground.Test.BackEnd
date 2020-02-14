/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentFactoidsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentFactoidsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentFactoidsView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentFactoidsView ? transformProxies(this.props.children) : {
      'fact-container': [],
      'fact-body': [],
      'fact-header': [],
      'sub-title': [],
      'title': [],
      'text-blurb': [],
      'fact-box-container': [],
      'fact-box': [],
      'fact': [],
      'fact-description': [],
      'fact-box2': [],
      'fact-box3': [],
      'fact-box4': [],
      'image': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-div-block-338">
            {map(proxies['fact-container'], props => <div {...{...props, className: `af-class-p1-impact-content-col ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              {map(proxies['fact-body'], props => <div {...{...props, className: `af-class-div-block-343 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                {map(proxies['fact-header'], props => <div {...{...props, className: `af-class-div-block-342 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['sub-title'], props => <h2 {...{...props, className: `af-class-section-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>community impact</React.Fragment>}</h2>)}
                  {map(proxies['title'], props => <h3 {...{...props, className: `af-class-section-tagline af-class-amli-blue ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Working title placeholder</React.Fragment>}</h3>)}
                  {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Introduce the certifications that make this property sustainable/ green. This can be a couple sentences long if the space is needed.</React.Fragment>}</p>)}
                </React.Fragment>)}</div>)}
                {map(proxies['fact-box-container'], props => <div {...{...props, className: `af-class-div-block-341 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                  {map(proxies['fact-box'], props => <div {...{...props, className: `af-class-div-block-340 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

                    {map(proxies['fact'], props => <div {...{...props, className: `af-class-big-stat-number ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>1,300</React.Fragment>}</div>)}
                    {map(proxies['fact-description'], props => <div {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
                  </React.Fragment>)}</div>)}
                  {map(proxies['fact-box2'], props => <div {...{...props, className: `af-class-div-block-340 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-big-stat-number">1,300</div>
                    <div className="af-class-paragraph">This is some text inside of a div block.</div>
                  </React.Fragment>}</div>)}
                  {map(proxies['fact-box3'], props => <div {...{...props, className: `af-class-div-block-340 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-big-stat-number">1,300</div>
                    <div className="af-class-paragraph">This is some text inside of a div block.</div>
                  </React.Fragment>}</div>)}
                  {map(proxies['fact-box4'], props => <div {...{...props, className: `af-class-div-block-340 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div className="af-class-big-stat-number">1,300</div>
                    <div className="af-class-paragraph">This is some text inside of a div block.</div>
                  </React.Fragment>}</div>)}
                </React.Fragment>)}</div>)}
              </React.Fragment>)}</div>)}
            </React.Fragment>)}</div>)}
            {map(proxies['image'], props => <div {...{...props, className: `af-class-p1-impact-image-col ${props.className || ''}`}}>{props.children}</div>)}
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default ContentFactoidsView

/* eslint-enable */