/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class ContentIntroBillboardStatementView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContentIntroBillboardStatementController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContentIntroBillboardStatementView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== ContentIntroBillboardStatementView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'statement': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-content-intro-billboard-benefits ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            <div className="af-class-div-block-56">
              {map(proxies['statement'], props => <p {...{...props, className: `af-class-paragraph af-class-centered af-class-large ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment><strong>AMLI’s benefits</strong> are one of the many reasons you’ll love being a FAMLI member! We offer competitive pay and benefits that provide peace of mind today and for the future. Many of our plans have options that allow you to choose what’s best for you and your family.</React.Fragment>}</p>)}
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default ContentIntroBillboardStatementView

/* eslint-enable */