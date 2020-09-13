import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入reset.css
import '@/assets/css/reset.css'
// 引入rem.js
import '@/assets/js/rem.js'
// 完全引入vant
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 引入mock
import '@/mock/mock.js'
import axios from 'axios'

// 按需引入vant
import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Tabs,
  CellGroup,
  Field,
  Toast
} from 'vant'
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem)
  .use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(CellGroup)
  .use(Field).use(Toast)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
