import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _910f7690 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _a4a92df2 = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _15e6e7a1 = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages/detail/_id" */))
const _0547492c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _910f7690,
    name: "cart"
  }, {
    path: "/product",
    component: _a4a92df2,
    name: "product"
  }, {
    path: "/detail/:id?",
    component: _15e6e7a1,
    name: "detail-id"
  }, {
    path: "/",
    component: _0547492c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
