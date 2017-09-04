import Config from './config'
import router from './router'
let Bear = {
  createApp (val) {
    router.intoRouter(val)
    router.init()
  },
  config: Config
}
export default Bear
