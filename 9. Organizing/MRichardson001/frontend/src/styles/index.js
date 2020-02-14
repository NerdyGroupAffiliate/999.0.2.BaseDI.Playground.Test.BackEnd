/* eslint-disable */

const styles = [
  {
    type: 'href',
    body: '/css/normalize.css',
  },
  {
    type: 'href',
    body: '/css/components.css',
  },
  {
    type: 'href',
    body: '/css/amli.css',
  },
  {
    type: 'sheet',
    body: '@media only screen and (min-device-width :768px) and (max-device-width :1024px) and (orientation :landscape){.af-view .af-class-about-page-header,.af-view .af-class-about-page-header.af-class-corporate-gov,.af-view .af-class-about-page-header.af-class-development,.af-view .af-class-about-page-header.af-class-retail{max-height:400px!important}}.af-view .af-class-blue-highlight,.af-view .af-class-green-highlight,.af-view .af-class-yellow-highlight{position:relative}.af-view .af-class-green-highlight::after{content:\'\';background-color:#b1e37d;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-blue-highlight::after{content:\'\';background-color:#cadbf0;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-yellow-highlight::after{content:\'\';background-color:#ecd925;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-blur{backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.af-view .af-class-green-highlight-half::after{content:\'\';background-color:#b1e37d;display:block;position:absolute;top:50%;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-yellow-highlight-half::after{content:\'\';background-color:#ecd925;display:block;position:absolute;top:50%;left:-5px;bottom:5px;right:-5px;z-index:-1}',
  },
  {
    type: 'sheet',
    body: '@media only screen and (min-device-width :768px) and (max-device-width :1024px) and (orientation :landscape){.af-view .af-class-about-page-header,.af-view .af-class-about-page-header.af-class-corporate-gov,.af-view .af-class-about-page-header.af-class-development,.af-view .af-class-about-page-header.af-class-retail{max-height:400px!important}}.af-view .af-class-blue-highlight,.af-view .af-class-green-highlight,.af-view .af-class-yellow-highlight{position:relative}.af-view .af-class-green-highlight::after{content:\'\';background-color:#b1e37d;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-blue-highlight::after{content:\'\';background-color:#cadbf0;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-yellow-highlight::after{content:\'\';background-color:#ecd925;display:block;position:absolute;top:-3px;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-blur{backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.af-view .af-class-green-highlight-half::after{content:\'\';background-color:#b1e37d;display:block;position:absolute;top:50%;left:-5px;bottom:0;right:-5px;z-index:-1}.af-view .af-class-yellow-highlight-half::after{content:\'\';background-color:#ecd925;display:block;position:absolute;top:50%;left:-5px;bottom:5px;right:-5px;z-index:-1}',
  },
]

const loadingStyles = styles.map((style) => {
  let styleEl
  let loading

  if (style.type == 'href') {
    styleEl = document.createElement('link')

    loading = new Promise((resolve, reject) => {
      styleEl.onload = resolve
      styleEl.onerror = reject
    })

    styleEl.rel = 'stylesheet'
    styleEl.type = 'text/css'
    styleEl.href = style.body
  }
  else {
    styleEl = document.createElement('style')
    styleEl.type = 'text/css'
    styleEl.innerHTML = style.body

    loading = Promise.resolve()
  }

  document.head.appendChild(styleEl)

  return loading
})

export default Promise.all(loadingStyles).then(() => {
  const styleSheets = Array.from(document.styleSheets).filter((styleSheet) => {
    return styleSheet.href && styles.some((style) => {
      return style.type == 'href' && styleSheet.href.match(style.body)
    })
  })
  styleSheets.forEach((styleSheet) => {
    Array.from(styleSheet.rules).forEach((rule) => {
      if (rule.selectorText) {
        rule.selectorText = rule.selectorText
          .replace(/\.([\w_-]+)/g, '.af-class-$1')
          .replace(/\[class(.?)="( ?)([^"]+)( ?)"\]/g, '[class$1="$2af-class-$3$4"]')
          .replace(/([^\s][^,]*)(\s*,?)/g, '.af-view $1$2')
          .replace(/\.af-view html/g, '.af-view')
          .replace(/\.af-view body/g, '.af-view')
          .replace(/af-class-w-/g, 'w-')
          .replace(/af-class-anima-/g, 'anima-')
          .replace(/af-class-([\w_-]+)an-animation([\w_-]+)/g, '$1an-animation$2')
      }
    })
  })
})

/* eslint-enable */