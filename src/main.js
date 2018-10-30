import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import foot from './components/foot.vue'
import center from './components/main.vue'
import head from './components/HelloWorld.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:"/head"},
    {path:'/head',component:head,children:[
      {path:'/center',component:center},
      {path:'/foot',component:foot}
    ]},
  ]
})

new Vue({
  el:"#app",
  router,
  render: h => h(App),
}).$mount('#app')
