import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from './config'

import VueAppContainer from './components/VueAppContainer'

let VueAppSubRoutes = []
function intoRouter (routeTable) {
  VueAppSubRoutes = routeTable
}
function init () {
  let routeConfig = Config.get('router')
  let rootComponent = Config.get('rootAppComponent')
  let mountTo = Config.get('mountTo')

  let RouteLabel = routeConfig.appUrlPrefix
  let VueAppPath = `/${RouteLabel.VueApp}`
  let routeTable = [
    {
      path: VueAppPath,
      component: VueAppContainer,
      meta: {
        appType: 'vue'
      },
      children: VueAppSubRoutes
    }
  ]
  let router = new VueRouter({
    routes: routeTable
  })
  rootComponent.router = router
  new Vue(rootComponent).$mount(mountTo)
}
export default { init, intoRouter }
