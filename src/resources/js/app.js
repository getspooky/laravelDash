
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueChartkick from 'vue-chartkick'

import Chart from 'chart.js'

import VueSweetalert2 from 'vue-sweetalert2';

import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueSweetalert2);

Vue.use(VueChartkick, {adapter: Chart});

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCJSxZXZJ8NAn5U7JdqeHog2daCS9uDXjo',
        libraries: 'places', // This is required if you use the Autocomplete plugin
        // OR: libraries: 'places,drawing'
        // OR: libraries: 'places,drawing,visualization'
        // (as you require)

        //// If you want to set the version, you can do so:
        // v: '3.26',
    }})


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('editor-component',require('./vuejs/EditorComponent').default);

Vue.component('manage-component',require('./vuejs/ManageComponent').default);

Vue.component('chart-component',require('./vuejs/ChartComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});

