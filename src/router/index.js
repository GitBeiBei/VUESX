import Vue from 'vue'
import Router from 'vue-router'
import One from '@/components/article/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    }
  ]
})
