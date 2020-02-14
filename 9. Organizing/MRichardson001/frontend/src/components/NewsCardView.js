/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class NewsCardView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NewsCardController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NewsCardView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== NewsCardView ? transformProxies(this.props.children) : {
      'card-wrapper': [],
      'image': [],
      'title': [],
      'body': [],
      'avatar': [],
      'author': [],
      'date': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['card-wrapper'], props => <div {...{...props, className: `af-class-news_card ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['image'], props => <div {...{...props, className: `af-class-news-card-image ${props.className || ''}`}}>{props.children}</div>)}
            <div className="af-class-news-card-content">
              <h6 className="af-class-heading-4">{map(proxies['title'], props => <strong {...props}>{props.children ? props.children : <React.Fragment>Out &amp; About: Things to Do in October 2018</React.Fragment>}</strong>)}</h6>
              {map(proxies['body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get your boots and flannels ready because the cooler temperatures of October are officially here. Well, for most of us, anyway.…</React.Fragment>}</p>)}
              <div className="af-class-cards_news_author_wrapper">
                {map(proxies['avatar'], props => <div {...{...props, className: `af-class-author_image ${props.className || ''}`}}>{props.children}</div>)}
                <div className="af-class-div-block-14">
                  {map(proxies['author'], props => <div {...props}>{props.children ? props.children : <React.Fragment>Lauren Fischer</React.Fragment>}</div>)}
                  {map(proxies['date'], props => <div {...props}>{props.children ? props.children : <React.Fragment>6/23/19</React.Fragment>}</div>)}
                </div>
              </div>
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default NewsCardView

/* eslint-enable */