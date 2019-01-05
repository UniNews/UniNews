// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import { CHECK_AUTH } from '@/store/actions.type';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	mode: 'history',
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	store,
	created() {
		this.$store.dispatch(CHECK_AUTH);
	}
});
