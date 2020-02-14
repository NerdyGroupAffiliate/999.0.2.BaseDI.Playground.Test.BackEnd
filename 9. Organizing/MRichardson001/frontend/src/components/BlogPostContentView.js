/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class BlogPostContentView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogPostContentController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogPostContentView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== BlogPostContentView ? transformProxies(this.props.children) : {
      'blog-body': [],
      'empty': [],
      'empty1': [],
      'empty2': [],
      'empty3': [],
      'empty4': [],
      'empty5': [],
      'empty6': [],
      'empty7': [],
      'empty8': [],
      'empty9': [],
      'empty10': [],
      'empty11': [],
      'author-bio-wrapper': [],
      'author-image': [],
      'author-bio': [],
      'view-authors-posts-link': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          <div className="af-class-blog-content-wrapper">
            <div className="af-class-blog-content-container">
              {map(proxies['blog-body'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Heating and cooling your apartment, especially in regions with greater shifts in temperature, can be one of the more expensive elements of your utility bill. If you want to lower your footprint on the planet or just want to save on your monthly bill, reducing your energy use will help you get there. Luckily, there are a few easy ways to reduce the energy consumption in your apartment while also maintaining a comfortable temperature inside. Here are a few simple ways you can reduce energy costs this winter.</React.Fragment>}</p>)}
              {map(proxies['empty'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Adjust the thermostat</React.Fragment>}</h3>)}
              {map(proxies['empty1'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>A big way to reduce your energy cost this winter is to decrease the temperature inside your apartment before you go to sleep at night. Adjusting the temperature down 5-10 degrees will make a big difference in your overall usage and won’t affect your comfort level. If you’ll be out of your apartment for the day or are leaving for a weekend get-away, lower the thermostat but never turn it off completely. Turning off your heat can cause pipes to freeze and lead to other major issues. The heater will also have to work even harder—and use more energy—when you’re back home and need to warm up.</React.Fragment>}</p>)}
              {map(proxies['empty2'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Use a humidifier</React.Fragment>}</h3>)}
              {map(proxies['empty3'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Have you noticed how dry it gets when you run the heat in your apartment after a while? Try adding in a humidifier during the winter months to add moisture back into the air. Moist air holds heat better and makes the air feel warmer and more comfortable. Another option is to add a few humidity-generating houseplants such as spider plants, pothos or peace lilies.</React.Fragment>}</p>)}
              {map(proxies['empty4'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Washer and dryer use</React.Fragment>}</h3>)}
              {map(proxies['empty5'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Only 10 percent of electricity usage goes into running your washing machine—the other 90 percent is used to heat the water. Whenever possible, wash full-loads of laundry using cold water to reduce your consumption. When drying laundry, try to pair items made of similar fabrics so they will have a similar dry time and you won’t run the risk of over-drying certain clothing items. Or, skip the dryer completely and opt to dry your laundry on a drying rack.</React.Fragment>}</p>)}
              {map(proxies['empty6'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Use Sunlight</React.Fragment>}</h3>)}
              {map(proxies['empty7'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Open the blinds and curtains on your windows during the day to allow the sun to heat up your home. Once the sun goes down for the day, close your curtains to lock the heat inside. This is a natural way to warm up your apartment and won’t cost anything on your energy bill.</React.Fragment>}</p>)}
              {map(proxies['empty8'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Chose LED bulbs</React.Fragment>}</h3>)}
              {map(proxies['empty9'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lighting is one of the easiest ways to save money on your energy bill during the winter. Try replacing the most used light bulbs in your apartment with energy efficient LED bulbs. LED light bulbs us 75 percent less energy on average and can last up to 10 times longer than standard incandescent bulbs. Another thing to keep in mind is to always turn lights off when leaving a room. Using light bulbs only when needed will extend their life and lower your overall energy bill.</React.Fragment>}</p>)}
              {map(proxies['empty10'], props => <h3 {...{...props, className: `af-class-blog-article-content-header ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Bundle up</React.Fragment>}</h3>)}
              {map(proxies['empty11'], props => <p {...{...props, className: `af-class-paragraph ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Keep your family cozy inside by putting out extra blankets on the couch and on your bed—even add flannel sheets. If your apartment is not carpeted, consider adding a rug to the main living area to keep the floors warm on your feet. The winter is always a good time to wear your favorite warm socks and sweaters around the house for extra warmth. Bundling up is an easy way to keep your energy costs lower and not be tempted to bump up your thermostat.</React.Fragment>}</p>)}
              <div className="af-class-div-block-305">
                {map(proxies['author-bio-wrapper'], props => <div {...{...props, className: `af-class-author-bio-block ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}
                        {map(proxies['author-image'], props => <img src="/images/author-lauren-fischer2x.jpg" alt="" {...{...props, className: `af-class-image-42 ${props.className || ''}`}}>{props.children}</img>)}
                  <div className="af-class-article-author-box-title">about the author</div>
                  {map(proxies['author-bio'], props => <p {...{...props, className: `af-class-paragraph af-class-author-bio ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Lauren is a freelance web designer and writer out of Asheville, NC. Lauren has worked with a variety of businesses from manufacturing, healthcare, non-profits, and eCommerce shops to enhance their online presence. When she's not working, she's hiking with her dogs, cooking something tasty, or planning her next adventure.</React.Fragment>}</p>)}
                  {map(proxies['view-authors-posts-link'], props => <a href="/#" {...{...props, className: `w-inline-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                    <div>View all posts by Lauren Fischer</div>
                  </React.Fragment>}</a>)}
                </React.Fragment>)}</div>)}
              </div>
            </div>
          </div>
        </span>
      </React.Fragment>
    )
  }
}

export default BlogPostContentView

/* eslint-enable */