import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Gallery from './views/Gallery.vue'
import TenantDetails from './views/TenantDetails.vue'
import EditTenant from './views/EditTenant.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/tenant',
      name: 'TenantList',
      component: Gallery
    },
    // edit and add is the same cmp- edit has tenant id
    // EditTenant component is before TenantDetails component, since:
    // path: '/tenant/edit can be read as path: '/tenant/:tenantId?' in TenantDetails component

    {
      path: '/tenant/edit/:tenantId?',
      name: 'edit',
      component: EditTenant
    },
    {
      path: '/tenant/:tenantId?',
      name: 'tenant-details',
      component: TenantDetails
    },
  ]
})
