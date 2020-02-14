/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class StarActiveView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/StarActiveController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = StarActiveView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== StarActiveView ? transformProxies(this.props.children) : {

    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-icon--star--active w-embed">
            <style dangerouslySetInnerHTML={{__html: "\n .af-view .af-class-icon--star--active {\n  fill:#ecd925;\n  fill-rule: evenodd;\n}\n" }} />
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.02 18.09">
              <g id="iPad">
                <g id="Group-2">
                  <polygon id="Star" points="9.51 15 3.63 18.09 4.75 11.54 0 6.91 6.57 5.96 9.51 0 12.45 5.96 19.02 6.91 14.27 11.54 15.39 18.09 9.51 15" className="af-class-icon--star--active">
                  </polygon></g>
              </g>
            </svg></div>
        </span>
      </React.Fragment>
    )
  }
}

export default StarActiveView

/* eslint-enable */