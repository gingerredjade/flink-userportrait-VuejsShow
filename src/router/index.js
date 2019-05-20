// router
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import index from '../index.vue'

import store from '../store/index.js'
import VueResource from 'vue-resource'
import highcharts from '../components/highcharts.vue'
import baseyear from '../components/baseyear.vue'
import brandlike from '../components/brandlike.vue'
import carrier from '../components/carrier.vue'
import chaoManAndWomen from '../components/chaoManAndWomen.vue'
import consumptionlevel from '../components/consumptionlevel.vue'
import email from '../components/email.vue'
import usetype from '../components/usetype.vue'
import label from '../components/label.vue'


//highcharts的引入
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/',name:"home",component: home},
  { path: '/highcharts',name:"highcharts",component: highcharts},
  { path: '/baseyear',name:"baseyear",component: baseyear},
  { path: '/brandlike',name:"brandlike",component: brandlike},
  { path: '/carrier',name:"carrier",component: carrier},
  { path: '/chaoManAndWomen',name:"chaoManAndWomen",component: chaoManAndWomen},
  { path: '/consumptionlevel',name:"consumptionlevel",component: consumptionlevel},
  { path: '/email',name:"email",component: email},
  { path: '/usetype',name:"usetype",component:usetype},
  { path: '/label',name:"label",component:label}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  store,
  router,
  render: h => h(index)
}).$mount('#app')

// 现在，应用已经启动了！
