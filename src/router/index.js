import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import ViewCategory from '@/components/ViewCategory'
import AddCategory from '@/components/AddCategory'
import EditCategory from '@/components/EditCategory'
//
import ViewExpense from '@/components/ViewExpense'
import AddExpense from '@/components/AddExpense'
import EditExpense from '@/components/EditExpense'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
        // guest: true
      }
    },
    {
      path: '/expenses',
      name: 'ViewExpense',
      component: ViewExpense,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-expense',
      name: 'AddExpense',
      component: AddExpense,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-expense',
      name: 'EditExpense',
      component: EditExpense,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'ViewCategory',
      component: ViewCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-category',
      name: 'AddCategory',
      component: AddCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-category',
      name: 'EditCategory',
      component: EditCategory,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
        params: {
          nextUrl: to.fullPath
        }
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          next({
            name: 'Dashboard'
          })
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({
        name: 'Dashboard'
      })
    }
  } else {
    next()
  }
})

export default router;
