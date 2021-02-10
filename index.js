function init (key) {
  const analytics = window.analytics = window.analytics || []
  if (!analytics.initialize) {
    if (analytics.invoked) {
      window.console && console.error && console.error('Segment snippet included twice.')
    } else {
      analytics.invoked = false
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
        'addSourceMiddleware',
        'addIntegrationMiddleware',
        'setAnonymousId',
        'addDestinationMiddleware',
      ]
      analytics.factory = function (e) {
        return function () {
          const t = Array.prototype.slice.call(arguments)
          t.unshift(e)
          analytics.push(t)
          return analytics
        }
      }
      for (var i = 0; i < analytics.methods.length; i++) {
        const key = analytics.methods[i]
        analytics[key] = analytics.factory(key)
      }
      analytics.load = function (key, e) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = false
        script.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`
        var n = document.getElementsByTagName('script')[0]
        n.parentNode.insertBefore(script, n); analytics._loadOptions = e
      }
      analytics.SNIPPET_VERSION = '4.13.1'
      analytics.load(key)
      analytics.page()
    }
  }
}

function identify () {
  window.analytics && window.analytics.identify && window.analytics.identify.apply(window.analytics, arguments)
}

function reset () {
  window.analytics && window.analytics.reset && window.analytics.reset.apply(window.analytics, arguments)
}

function track () {
  window.analytics && window.analytics.track && window.analytics.track.apply(window.analytics, arguments)
}

function trackLink () {
  window.analytics && window.analytics.trackLink && window.analytics.trackLink.apply(window.analytics, arguments)
}

function trackForm () {
  window.analytics && window.analytics.trackForm && window.analytics.trackForm.apply(window.analytics, arguments)
}

function page () {
  window.analytics && window.analytics.page && window.analytics.page.apply(window.analytics, arguments)
}

function group () {
  window.analytics && window.analytics.group && window.analytics.group.apply(window.analytics, arguments)
}

function alias () {
  window.analytics && window.analytics.alias && window.analytics.alias.apply(window.analytics, arguments)
}

function ready () {
  window.analytics && window.analytics.ready && window.analytics.ready.apply(window.analytics, arguments)
}

function debug () {
  window.analytics && window.analytics.debug && window.analytics.debug.apply(window.analytics, arguments)
}

function on () {
  window.analytics && window.analytics.on && window.analytics.on.apply(window.analytics, arguments)
}

function off () {
  window.analytics && window.analytics.off && window.analytics.off.apply(window.analytics, arguments)
}

function once () {
  window.analytics && window.analytics.once && window.analytics.once.apply(window.analytics, arguments)
}

function trackSubmit () {
  window.analytics && window.analytics.trackSubmit && window.analytics.trackSubmit.apply(window.analytics, arguments)
}

function trackClick () {
  window.analytics && window.analytics.trackClick && window.analytics.trackClick.apply(window.analytics, arguments)
}

function pageview () {
  window.analytics && window.analytics.pageview && window.analytics.pageview.apply(window.analytics, arguments)
}

function addSourceMiddleware () {
  window.analytics && window.analytics.addSourceMiddleware && window.analytics.addSourceMiddleware.apply(window.analytics, arguments)
}

function addIntegrationMiddleware () {
  window.analytics && window.analytics.addIntegrationMiddleware && window.analytics.addIntegrationMiddleware.apply(window.analytics, arguments)
}

function setAnonymousId () {
  window.analytics && window.analytics.setAnonymousId && window.analytics.setAnonymousId.apply(window.analytics, arguments)
}

function addDestinationMiddleware () {
  window.analytics && window.analytics.addDestinationMiddleware && window.analytics.addDestinationMiddleware.apply(window.analytics, arguments)
}

module.exports = {
  init,
  trackSubmit,
  trackClick,
  trackLink,
  trackForm,
  pageview,
  identify,
  reset,
  group,
  track,
  ready,
  alias,
  debug,
  page,
  once,
  off,
  on,
  addSourceMiddleware,
  addIntegrationMiddleware,
  setAnonymousId,
  addDestinationMiddleware,
}
