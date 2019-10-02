import App from './App.vue';
import router from './router.js';

require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
	router,
    render: h => h(App)
}).$mount('#app');
