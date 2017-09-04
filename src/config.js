let router = {
  appUrlPrefix: {
    IframeApp: 'app-i',
    VueApp: 'app-v',
    ExternalSelf: 'ex-s'
  }
}
let config = {
  router,
  rootAppComponent: null,
  mountTo: '#bearApp'
}
function merge (object) {
  let
    source, key, value, sourceKey

  for (var i = 1; i < arguments.length; i++) {
    source = arguments[i]
    for (key in source) {
      value = source[key]
      if (value && value.constructor === Object) {
        sourceKey = object[key]
        if (sourceKey) {
          merge(sourceKey, value)
        } else {
          object[key] = value
        }
      } else {
        object[key] = value
      }
    }
  }

  return object
}

function set (newConfig) {
  merge(config, newConfig)
}

function get (key) {
  return config[key]
}

export default {
  get,
  set
}
