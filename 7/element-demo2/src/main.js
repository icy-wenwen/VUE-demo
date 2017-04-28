import Vue from 'vue'
import App from './App.vue'

import {Button,Radio,Rate,Pagination } from "element-ui";
Vue.use(Button)
Vue.use(Radio)
Vue.use(Rate)
Vue.use(Pagination )

new Vue({
  el: '#app',
  render: h => h(App)
})
