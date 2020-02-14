/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import GridSocialCardSocialView from './GridSocialCardSocialView'
import GridSocialCardView from './GridSocialCardView'
import GridSocialCardTaglineTitleView from './GridSocialCardTaglineTitleView'
import GridSocialCardTaglineView from './GridSocialCardTaglineView'


let Controller

class GridSocialView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GridSocialController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GridSocialView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== GridSocialView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'container': [],
      'gridSocialCardViewList1': [],
      'gridSocialCardViewList2': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-section-2 ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['container'], props => <div {...{...props, className: `af-class-div-block-456 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <GridSocialCardSocialView.Controller {...this.props} />
              {map(proxies['gridSocialCardViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<GridSocialCardTaglineTitleView.Controller {...this.props} />
              <GridSocialCardTaglineView.Controller {...this.props} />
              {map(proxies['gridSocialCardViewList2'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}<GridSocialCardSocialView.Controller {...this.props} />
            </React.Fragment>}</div>)}
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default GridSocialView

/* eslint-enable */