import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from './config'

let VueAppSubRoutes = []
function intoRouter (routeTable) {
  VueAppSubRoutes = routeTable
}
function init () {
  let rootComponent = Config.get('rootAppComponent')
  let mountTo = Config.get('mountTo')
  let router = new VueRouter({
    routes: routeTable
  })
  rootComponent.router = router
  new Vue(rootComponent).$mount(mountTo)
}
export default { init, intoRouter }
