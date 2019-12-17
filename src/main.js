import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios.defaults.baseURL = "http://123.207.32.32:8000/"

// axios({
//   url: "home/multidata"
// }).then(res => {
//   console.log(res)
// })
// const install = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })
// install({
//   url: 'home/multidata'
// }).then(res => {
//   console.log(res)
// })
// install({
//   url: 'home/data',
//   params: {
//     type: "pop",
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
import { request } from './network'
request({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
}).catch(res => {
  console.log(res)
})