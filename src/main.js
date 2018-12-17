// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.use(vueResource)
// 
// window.$ = require('jquery')
// window.JQuery = require('jquery')
//
// import './assets/css/bootstrap.css';
// import './assets/font-awesome/css/font-awesome.css';
// import './assets/css/style.css';
// import './assets/css/zabuto_calendar.css';
// import './assets/js/gritter/css/jquery.gritter.css';
// import './assets/lineicons/style.css';

// import './assets/js/chart-master/Chart.js'; 
// import './assets/js/jquery.js';
// import './assets/js/bootstrap.min.js';

Vue.prototype.$baseUrl = 'https://etapis.herokuapp.com/index.php/api/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Vue.component('app', App)
// Vue.component('top-bar', TopBar)
