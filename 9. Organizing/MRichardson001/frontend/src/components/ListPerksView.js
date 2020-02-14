/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ListPerksView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ListPerksController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ListPerksView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ListPerksView ? transformProxies(this.props.children) : {
      'banner': [],
      'title': [],
      'text-blurb': [],
      'perk-list-top': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-list-perks">
            {map(proxies['banner'], props => <div {...{...props, className: `af-class-list-perks-banner ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-list-perks-banner-container">
                {map(proxies['title'], props => <div {...{...props, className: `af-class-list-perks-title ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>AMLI&nbsp;Perks</React.Fragment>}</div>)}
                {map(proxies['text-blurb'], props => <div {...{...props, className: `af-class-paragraph af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Introductory sentence to provide context for the logos that could be a couple sentences long if need be.</React.Fragment>}</div>)}
              </div>
            </React.Fragment>)}</div>)}
            <div className="af-class-div-block-172">
              {map(proxies['perk-list-top'], props => <div {...{...props, className: `af-class-div-block-169 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-div-block-168"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
                <div className="af-class-div-block-168 af-class-last-child"><img src="/images/placeholder2x.png" alt="" className="af-class-image-32" /></div>
              </React.Fragment>}</div>)}
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default ListPerksView

/* eslint-enable */