import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
const Contact = { template: '<p>contact page</p>' };
const Policy = { template: '<p>policy page</p>' };

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/policy',
			name: 'Policy',
			component: Policy
		},
		{
			path: '/contact-us',
			name: 'Policy',
			component: Contact
		},
		{
			path: '/',
			name: 'HelloWorld',
			component: Home
		}
	]
});
