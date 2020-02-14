/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from '../helpers'



let Controller

class LocationMapPoiBarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/LocationMapPoiBarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LocationMapPoiBarView

        return Controller
      }

      throw e
    }
  }

  render() {
    const proxies = Controller !== LocationMapPoiBarView ? transformProxies(this.props.children) : {
      'wrapper': [],
      'perks': [],
      'transit': [],
      'key-buildings': [],
      'shopping': [],
      'restaurants': [],
      'entertainment': [],
    }




    return (
      <React.Fragment>

        <span className="af-view" style={{width: '100%', height: '100%', flex: 1}}>
          {map(proxies['wrapper'], props => <div {...{...props, className: `af-class-locations-map-poi-bar ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>
                        {props.topelement ? props.topelement() : null}

            {map(proxies['perks'], props => <div {...{...props, className: `af-class-div-block-256 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255 af-class-perks">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>like - anticon</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Locations" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="anticon" fontSize={26} fontWeight={400}>
                      <g transform="translate(-58.000000, -1830.000000)" fill="#FFFFFF" id="Group-45">
                        <g transform="translate(0.000000, 1764.000000)">
                          <g id="Group-33" transform="translate(50.000000, 40.000000)">
                            <g id="Group-34">
                              <g id="Group-18" transform="translate(0.000000, 20.000000)">
                                <g id="shopping-bag---FontAwesome">
                                  <text id="like---anticon">
                                    <tspan x={7} y={28}></tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">AMLI Perks</div>
            </React.Fragment>}</div>)}
            {map(proxies['transit'], props => <div {...{...props, className: `af-class-div-block-256 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="22px" height="24px" viewBox="0 0 22 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>train - material</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" fontFamily="material" fontSize={30} fontWeight="normal">
                      <g id="Components/Map/Icons/Points_of_Interest/Transit" transform="translate(-9.000000, -8.000000)" fill="#FFFFFF">
                        <g id="Group">
                          <text id="train---material">
                            <tspan x={5} y={31}></tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">Transit</div>
            </React.Fragment>}</div>)}
            {map(proxies['key-buildings'], props => <div {...{...props, className: `af-class-div-block-256 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="32px" height="30px" viewBox="0 0 32 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>Group 26</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <polygon id="path-1" points="5.09355509e-05 0.00627088949 34.9713087 0.00627088949 34.9713087 30 5.09355509e-05 30" />
                      <polygon id="path-3" points="0 30 35 30 35 0 0 0" />
                    </defs>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Components/Map/Icons/Points_of_Interest/Key" transform="translate(-4.000000, -5.000000)">
                        <g id="shopping-bag---FontAwesome">
                          <g id="Group-26" transform="translate(19.500000, 20.000000) scale(-1, 1) translate(-19.500000, -20.000000) translate(2.000000, 5.000000)">
                            <g id="Group-3">
                              <mask id="mask-2" fill="white">
                                <use href="/#path-1" />
                              </mask>
                              <g id="Clip-2" />
                              <path d="M15.0974938,23.2518841 C15.1000405,23.2517224 15.9501549,23.2409677 15.9709657,23.2409677 L15.9709657,23.2408868 L19.000394,23.2408868 C19.0210593,23.2408868 19.8713191,23.2518841 19.8737931,23.2518841 L19.8737931,29.2003747 L34.1171923,29.2003747 C34.5422131,29.2003747 34.9713087,30.3887305 34.9713087,29.8680566 L34.9713087,29.6869245 C34.9713087,29.1662507 34.5421403,28.8259811 34.1171923,28.8259811 L29.1809553,28.8259811 L29.1809553,9.45269272 C29.1809553,8.51687062 28.3901445,7.85226146 27.5123067,7.85226146 L22.8938347,7.85226146 L22.8938347,0.45932345 C22.8905603,0.206628032 22.7040634,0.00439083558 22.4766726,0.00681671159 L12.4946143,0.00681671159 C12.4814439,0.00608894879 12.4682006,0.00608894879 12.4549574,0.00681671159 C12.2469948,0.0325309973 12.0891674,0.226843666 12.0874938,0.45932345 L12.0874938,7.85226146 L7.45898025,7.85226146 C6.58121518,7.85226146 5.79040437,8.51687062 5.79040437,9.45269272 L5.79040437,28.8259811 L0.85416736,28.8259811 C0.429219335,28.8259811 5.09355509e-05,29.1663315 5.09355509e-05,29.6869245 L5.09355509e-05,29.8680566 C5.09355509e-05,30.3887305 0.42914657,29.2003747 0.85416736,29.2003747 L15.0974938,29.2003747 L15.0974938,23.2518841 Z" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)" />
                            </g>
                            <mask id="mask-4" fill="white">
                              <use href="/#path-3" />
                            </mask>
                            <g id="Clip-5" />
                            <polygon id="Stroke-6" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="9 13 11 13 11 11 9 11" />
                            <polygon id="Stroke-8" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="14 13 16 13 16 11 14 11" />
                            <polygon id="Stroke-10" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="19 13 21 13 21 11 19 11" />
                            <polygon id="Stroke-12" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="24 13 26 13 26 11 24 11" />
                            <polygon id="Stroke-14" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="9 18 11 18 11 16 9 16" />
                            <polygon id="Stroke-16" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="14 18 16 18 16 16 14 16" />
                            <polygon id="Stroke-18" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="19 18 21 18 21 16 19 16" />
                            <polygon id="Stroke-20" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="24 18 26 18 26 16 24 16" />
                            <polygon id="Stroke-22" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="9 21.0000823 9 23 11 23 11 21" />
                            <polygon id="Stroke-24" stroke="#3F3F3F" fill="#3F3F3F" mask="url(#mask-4)" points="24 21.0000823 24 23 26 23 26 21" />
                            <polygon id="Fill-25" fill="#3F3F3F" mask="url(#mask-4)" points="16.5327014 2 16.5327014 3.52335811 15 3.52335811 15 5.46729864 16.5327014 5.46729864 16.5327014 7 18.4766419 7 18.4766419 5.46729864 20 5.46729864 20 3.52335811 18.4766419 3.52335811 18.4766419 2" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">Key Buildings</div>
            </React.Fragment>}</div>)}
            {map(proxies['shopping'], props => <div {...{...props, className: `af-class-div-block-256 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="27px" height="24px" viewBox="0 0 27 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>shopping-basket - FontAwesome</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Components/Map/Icons/Points_of_Interest/Groceries" transform="translate(-7.000000, -8.000000)" fill="#FFFFFF">
                        <g id="shopping-basket---FontAwesome">
                          <path d="M32.3125,18.2857143 C33.2485352,18.2857143 34,19.0491071 34,20 C34,20.9508929 33.2485352,21.7142857 32.3125,21.7142857 L32.1147461,21.7142857 L30.5986328,30.5803571 C30.4536133,31.3973214 29.7548828,32 28.9375,32 L12.0625,32 C11.2451172,32 10.5463867,31.3973214 10.4013672,30.5803571 L8.88525391,21.7142857 L8.6875,21.7142857 C7.75146484,21.7142857 7,20.9508929 7,20 C7,19.0491071 7.75146484,18.2857143 8.6875,18.2857143 L32.3125,18.2857143 Z M13.394043,29 C13.8554688,28.9598214 14.2114258,28.5446429 14.171875,28.0758929 L13.75,22.5044643 C13.7104492,22.0357143 13.3017578,21.6741071 12.840332,21.7142857 C12.3789062,21.7544643 12.0229492,22.1696429 12.0625,22.6383929 L12.484375,28.2098214 C12.5239258,28.6517857 12.8930664,29 13.328125,29 L13.394043,29 Z M18.8125,28.1428571 L18.8125,22.5714286 C18.8125,22.1026786 18.4301758,21.7142857 17.96875,21.7142857 C17.5073242,21.7142857 17.125,22.1026786 17.125,22.5714286 L17.125,28.1428571 C17.125,28.6116071 17.5073242,29 17.96875,29 C18.4301758,29 18.8125,28.6116071 18.8125,28.1428571 Z M23.875,28.1428571 L23.875,22.5714286 C23.875,22.1026786 23.4926758,21.7142857 23.03125,21.7142857 C22.5698242,21.7142857 22.1875,22.1026786 22.1875,22.5714286 L22.1875,28.1428571 C22.1875,28.6116071 22.5698242,29 23.03125,29 C23.4926758,29 23.875,28.6116071 23.875,28.1428571 Z M28.515625,28.2098214 L28.9375,22.6383929 C28.9770508,22.1696429 28.6210937,21.7544643 28.159668,21.7142857 C27.6982422,21.6741071 27.2895508,22.0357143 27.25,22.5044643 L26.828125,28.0758929 C26.7885742,28.5446429 27.1445312,28.9598214 27.605957,29 L27.671875,29 C28.1069336,29 28.4760742,28.6517857 28.515625,28.2098214 Z M13.2753906,11.9107143 L12.0493164,17.4285714 L10.309082,17.4285714 L11.640625,11.5223214 C11.9833984,9.95535714 13.3413086,8.85714286 14.9233398,8.85714286 L17.125,8.85714286 C17.125,8.38839286 17.5073242,8 17.96875,8 L23.03125,8 C23.4926758,8 23.875,8.38839286 23.875,8.85714286 L26.0766602,8.85714286 C27.6586914,8.85714286 29.0166016,9.95535714 29.359375,11.5223214 L30.690918,17.4285714 L28.9506836,17.4285714 L27.7246094,11.9107143 C27.5400391,11.1205357 26.8676758,10.5714286 26.0766602,10.5714286 L23.875,10.5714286 C23.875,11.0401786 23.4926758,11.4285714 23.03125,11.4285714 L17.96875,11.4285714 C17.5073242,11.4285714 17.125,11.0401786 17.125,10.5714286 L14.9233398,10.5714286 C14.1323242,10.5714286 13.4599609,11.1205357 13.2753906,11.9107143 Z" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">Shopping</div>
            </React.Fragment>}</div>)}
            {map(proxies['restaurants'], props => <div {...{...props, className: `af-class-div-block-256 ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="25px" height="33px" viewBox="0 0 25 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>cutlery - FontAwesome</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Components/Map/Icons/Points_of_Interest/Restaurants" transform="translate(-8.000000, -7.000000)" fill="#FFFFFF">
                        <g id="cutlery---FontAwesome">
                          <path d="M32.7140151,12.426211 L27.8206526,21.7008539 C27.1575437,22.8493922 24.1069174,22.4682488 22.8292942,22.2410741 L11.6482217,41.6072597 C11.0751646,42.5998237 9.19678372,41.51534 9.76984078,40.522776 L20.9509133,21.1565904 C20.1153626,20.1637236 18.2599695,17.7123754 18.9230784,16.5638371 L24.5084736,7.6887394 C24.7950021,7.19245743 25.0895665,6.81425081 25.5761526,7.09518141 C26.0627386,7.37611202 25.8824843,7.82031552 25.5959557,8.31659749 L21.517609,16.1795919 C21.2310804,16.6758738 21.3968424,17.31985 21.8834285,17.6007806 C22.3700146,17.8817112 23.0105953,17.7032772 23.2971238,17.2069952 L28.0675033,9.74354614 C28.3540318,9.24726417 28.6485961,8.86905755 29.1351822,9.14998816 C29.6217683,9.43091877 29.4415139,9.87512227 29.1549854,10.3714042 L25.0766386,18.2343986 C24.7901101,18.7306806 24.9558721,19.3746567 25.4424582,19.6555873 C25.9290443,19.9365179 26.569625,19.7580839 26.8561535,19.261802 L31.626533,11.7983529 C31.9130615,11.3020709 32.2076258,10.9238643 32.6942119,11.2047949 C33.180798,11.4857255 33.0005436,11.929929 32.7140151,12.426211 Z M10.3812207,8.66512926 L28.0756014,39.3126956 C28.6486585,40.3052596 26.7702776,41.3897433 26.1972205,40.3971794 L17.4097838,25.1768925 L15.8527065,26.0758716 C15.6163647,26.2123236 15.2850298,26.1200301 15.1458588,25.8789789 C9.09915966,15.2535773 6.89142104,9.46998333 8.52264298,8.5281969 L8.9675254,8.27134392 C9.45411149,7.99041331 10.0946922,8.16884729 10.3812207,8.66512926 Z" />
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">Restaurants</div>
            </React.Fragment>}</div>)}
            {map(proxies['entertainment'], props => <div {...{...props, className: `af-class-div-block-256 af-class-last-child ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
              <div className="af-class-div-block-255">
                <div className="w-embed">
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg width="30px" height="28px" viewBox="0 0 30 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    {/*  Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch  */}
                    <title>Group</title>
                    <desc>Created with Sketch.</desc>
                    <g id="Symbols" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Components/Map/Icons/Points_of_Interest/Entertainment" transform="translate(-5.000000, -8.000000)">
                        <g id="Group-12-+-Path-3-+-Combined-Shape-Mask">
                          <g id="Group" transform="translate(5.000000, 8.000000)">
                            <g id="Group-12">
                              <path d="M14.2314678,21.1332412 C18.5959487,19.2801581 20.5599816,15.2227522 20.1235663,8.96102365 C19.2431053,2.05360278 16.9222851,-0.38719959 13.1611058,1.63861655 C12.661021,1.92065217 12.0514426,2.32156034 11.3323707,2.84134107 C10.2537628,3.62101217 8.41099749,4.42405442 7.40807925,4.42405442 C6.40516101,4.42405442 2.72836846,4.36153362 1.61234654,5.05993955 C0.49632462,5.75834548 -0.942516608,6.98835612 0.841050844,11.7945088 C1.73247055,14.1966042 4.25525941,18.586806 8.9804542,20.6966634 C10.5483985,21.3967697 12.2987364,21.5422957 14.2314678,21.1332412 Z" id="Path-2" fill="#FFFFFF" />
                              <path d="M8.35599082,15.434501 C11.4085184,16.0546472 13.8617236,15.309934 15.7156065,13.2003613 C15.7090998,13.1843647 15.5108248,15.6448546 12.9166905,16.4405282 C11.2166482,16.8856478 9.69641503,16.5503054 8.35599082,15.434501 Z M6.88158162,11.3163696 C6.12049138,11.2908275 5.62861141,11.2281485 5.4059417,11.1283326 C4.82851511,10.8694902 4.72362746,10.3493691 4.72362746,10.1670309 C4.72362746,9.73531711 5.61590348,8.82882489 6.88158162,8.63865253 C8.14725977,8.44848017 8.96040013,9.17286722 8.96040013,10.1670309 C8.96040013,10.8298067 8.26746063,11.2129196 6.88158162,11.3163696 Z M14.4446639,9.03941961 C13.2603835,9.74095643 12.466173,9.82362641 12.0620322,9.28742953 C11.4558211,8.4831342 11.671956,7.43637297 12.8118725,6.87310102 C13.951789,6.30982907 15.2264072,6.53763917 15.4896533,6.88690297 C15.6008376,7.03441765 15.833136,7.51463312 15.5238224,8.051207 C15.4045435,8.25812291 15.044824,8.58752711 14.4446639,9.03941961 Z" id="Combined-Shape" stroke="#3F3F3F" fill="#3F3F3F" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <path d="M21.366103,11.5510066 C22.9837686,11.6009125 24.2475597,11.492559 25.1574761,11.2259459 C26.5223507,10.8260264 29.2726531,10.6335999 29.2726531,13.5418253 C29.2726531,16.4500507 28.2509047,22.5091107 22.8931872,26.1439772 C19.3213756,28.5672215 16.0236465,27.556528 13,23.1118966" id="Path-3" stroke="#FFFFFF" />
                            <path d="M23.5227649,23.7327387 C21.1892716,21.6694126 18.692377,21.0877506 16.032081,21.9877526 C16.0297176,22.0048595 17.4316737,19.9731502 20.0760968,20.5811438 C21.7709363,21.04568 22.9198257,22.0962116 23.5227649,23.7327387 Z M24.0893193,17.8043626 C22.798831,17.3254954 22.2347714,16.7603038 22.3971407,16.1087878 C22.6406945,15.1315138 23.5901989,14.640734 24.7453161,15.172137 C25.9004333,15.70354 26.5255348,16.8374699 26.419772,17.2618493 C26.3751022,17.4410898 26.1480947,17.9238289 25.5364412,18.021124 C25.3005727,18.0586433 24.8181987,17.9863895 24.0893193,17.8043626 Z" id="Combined-Shape" fill="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg></div>
              </div>
              <div className="af-class-text-block-80">Entertainment</div>
            </React.Fragment>}</div>)}
            <div className="w-embed">
              <style dangerouslySetInnerHTML={{__html: "\n@media (min-width: 992px) and (max-width: 1024px) {\n   .af-class-locations-map-poi-bar {\n  justify-content: flex-start;\n  }\n}\n" }} />
            </div>
          </React.Fragment>)}</div>)}
        </span>
      </React.Fragment>
    )
  }
}

export default LocationMapPoiBarView

/* eslint-enable */