import Config from './config'
import router from './router'
let Bear = {
  createApp (router) {
    router.intoRouter = router
  }
  config: Config
}
export default Bear
