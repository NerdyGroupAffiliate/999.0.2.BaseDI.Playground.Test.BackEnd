/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class CardWithFactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CardWithFactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CardWithFactView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== CardWithFactView ? transformProxies(this.props.children) : {
      'image': [],
      'subtitle': [],
      'title': [],
      'text-blurb': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <section className="af-class-spotlight_billboard_descriptive">
            {map(proxies['image'], props => <div {...{...props, className: `af-class-spotlight-bb-descriptive-background ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

              <div className="af-class-spotlight-billboard-descriptive-blur">
                {map(proxies['subtitle'], props => <h2 {...{...props, className: `af-class-list-blocks-b-section-label af-class-light ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>outdoor lifestyle</React.Fragment>}</h2>)}
                {map(proxies['title'], props => <h3 {...{...props, className: `af-class-spotlight-billboard-impact-statement ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>There are over 3,000 bikes and 300 stations through the Divvy Bike Sharing System.</React.Fragment>}</h3>)}
                {map(proxies['text-blurb'], props => <p {...{...props, className: `af-class-spotlight-bb-description ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</React.Fragment>}</p>)}
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n .af-class-spotlight-billboard-descriptive-blur {\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n" }} />
                </div>
              </div>
            </React.Fragment>)}</div>)}
            <div className="af-class-spotlight-bb-background-offset" />
          </section>
        </span>
      </React.Fragment>
    )
  }
}

export default CardWithFactView

/* eslint-enable */