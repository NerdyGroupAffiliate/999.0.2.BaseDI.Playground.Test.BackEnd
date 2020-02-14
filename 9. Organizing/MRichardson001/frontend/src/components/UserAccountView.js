/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'

import UserAccountSidebarView from './UserAccountSidebarView'
import QuoteSummaryCardView from './QuoteSummaryCardView'


let Controller

class UserAccountView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UserAccountController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UserAccountView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== UserAccountView ? transformProxies(this.props.children) : {
      'quotes': [],
      'quoteSummaryCardViewList1': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-div-block-388">
            <UserAccountSidebarView.Controller {...this.props} />
            <div className="af-class-quote-details-wrap">
              {map(proxies['quotes'], props => <div {...{...props, className: `af-class-div-block-441 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                {map(proxies['quoteSummaryCardViewList1'], props => <React.Fragment {...props}>{props.children ? props.children : null}</React.Fragment>)}</React.Fragment>}</div>)}
            </div>
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width:992px) and (max-width: 1300px){\n   .af-class-quote-details-wrap {\n    padding: 30px;\n  }\n   .af-class-quote-details-wrap {\n    padding-top: 50px;\n  }\n   .af-class-quote-summary-details-col {\n    padding-left: 30px;\n    width: 100%\n  }\n   .af-class-quote-summary-apply-btn {\n    margin-top: 10px;\n  }\n}\n" }} />
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default UserAccountView

/* eslint-enable */