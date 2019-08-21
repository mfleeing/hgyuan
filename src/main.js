import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import toubu from './views/toubu.vue';
import store from './store'

Vue.use(ElementUI);
Vue.use(toubu);
Vue.component('toubu', toubu);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    components: {
        toubu
    },
    render: h => h(App),
}).$mount('#app');