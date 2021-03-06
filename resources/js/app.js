/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
let ValidationProvider  = require('vee-validate');
let BootstrapVue = require('bootstrap-vue');
let axios = require('axios');
let VueAxios = require('vue-axios');
let Paginate = require('vuejs-paginate');
let VueBarcode = require('vue-barcode');
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(ValidationProvider);
Vue.component('ValidationProvider',ValidationProvider.ValidationProvider);
Vue.component('ValidationObserver',ValidationProvider.ValidationObserver);
Vue.component('paginate', Paginate);
Vue.component('barcode', VueBarcode);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component('category-view', require('./components/CategoryView.vue').default);
Vue.component('provider-view', require('./components/ProviderView.vue').default);
Vue.component('product-view', require('./components/ProductView.vue').default);
Vue.component('customer-view', require('./components/CustomerView.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
