/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/BlogView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import BlogListPageHeaderView from '../components/BlogListPageHeaderView'
import BlogListPageBodyView from '../components/BlogListPageBodyView'
import FooterView from '../components/FooterView'


let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/BlogMeta")
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
            <BlogListPageHeaderView.Controller {...this.props} />
            <BlogListPageBodyView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogView

/* eslint-enable */