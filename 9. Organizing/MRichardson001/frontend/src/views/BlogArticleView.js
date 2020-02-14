/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'
import "../styles/BlogArticleView.css"
import NavigationHeaderView from '../components/NavigationHeaderView'
import BlogPostHeaderView from '../components/BlogPostHeaderView'
import BlogPostContentView from '../components/BlogPostContentView'
import BlogPostShareRowView from '../components/BlogPostShareRowView'
import BlogPostRelatedPostsView from '../components/BlogPostRelatedPostsView'
import FooterView from '../components/FooterView'


let Controller

class BlogArticleView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogArticleController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogArticleView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogArticleView ? transformProxies(this.props.children) : {

    }


    let Metadata
    try {
      Metadata = require("../meta/BlogArticleMeta")
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
            <BlogPostHeaderView.Controller {...this.props} />
            <BlogPostContentView.Controller {...this.props} />
            <BlogPostShareRowView.Controller {...this.props} />
            <BlogPostRelatedPostsView.Controller {...this.props} />
            <FooterView.Controller {...this.props} />
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogArticleView

/* eslint-enable */