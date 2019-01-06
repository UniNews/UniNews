// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import { AUTO_LOGIN } from '@/store/actions.type';
import firebase from '@/config/firebaseConfig';

Vue.use(ElementUI);

Vue.config.productionTip = false;

/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
	new Vue({
		mode: 'history',
		el: '#app',
		router,
		components: { App },
		template: '<App/>',
		store,
		created() {
			if (firebaseUser) {
				store.dispatch(AUTO_LOGIN, firebaseUser);
			}
		}
	});
	unsubscribe();
});
