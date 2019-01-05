import Vue from 'vue';
import { FETCH_ARTICLE } from './../actions.type';
import {
	SET_ARTICLE,
} from './../mutations.type';

export const state = { articles: [] };

export const actions = {
	[FETCH_ARTICLE](context) {
		console.log('FETCH_ARTICLE called!');
		context.commit(SET_ARTICLE, [
			{
				id: '1',
				title: 'Best OOP2 Tutor Ever.',
				description: 'Come and join to our darkside in 1/1/2019.',
				img: [
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/26166557_1859158550821212_174884729598333408_n.jpg?_nc_cat=101&_nc_ht=scontent.fbkk2-7.fna&oh=cd336056fb622fa85c44ea4c6721956b&oe=5CD4EEC5',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/16684191_1431759500227788_4523539130141331084_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk2-7.fna&oh=04db3afdfca34b488dfcefc391b979b6&oe=5C979D37',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/10361466_836847873052290_2173673032082702579_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk2-7.fna&oh=1fe32c1f658a73cfd60cf651fff5f1e4&oe=5C9CE9AA',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/10934003_816450055092072_1906053053581759871_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk2-7.fna&oh=6bc73586cd63804b82bad1d051a0d134&oe=5C967063'
				],
				time: '31 December 2018',
				rating: 5.0
			},
			{
				id: '2',
				title: 'Find FWD in KU.',
				description: 'I have been waiting for you for a long time.',
				img: [
					'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/28577899_790880621104128_4654599030704530848_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk22-2.fna&oh=2eb8045f86f08347aae32556121a75c4&oe=5CD79B7C',
					'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-0/p206x206/22365568_719232694935588_5027044140868658038_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk22-2.fna&oh=084be8064cd19cb9cdc605014fc7537c&oe=5C911FD3',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/13680801_507475342777992_3253600267447178825_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk2-7.fna&oh=a3eb2083b2b4a9712f1c7e864ed675c1&oe=5CD7830A',
					'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/12495202_445229732335887_2996133826024898030_n.jpg?_nc_cat=103&_nc_ht=scontent.fbkk22-2.fna&oh=d8380948ab603478812cdf2bca402b91&oe=5CC9471B'
				],
				time: '31 December 2018',
				rating: 3.7
			},
			{
				id: '3',
				title: 'Find Support in Dota2.',
				description: 'Gimme 2 tangos 1 ward please.',
				img: [
					'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/12654680_1021164557943620_755464198120797270_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk22-2.fna&oh=be3ebae57b92ff3e6e94106655b5c31a&oe=5CC4BB8A',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/27657286_1697512833642119_442896196507735015_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk2-7.fna&oh=ea3afcd5244d30e48639307ea086edb4&oe=5CD342EE',
					'https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/26815604_1684194721640597_1315450709207220916_n.jpg?_nc_cat=111&_nc_ht=scontent.fbkk2-7.fna&oh=2d74de6169d9081c43c9ff05d9cf6993&oe=5CD6864A',
					'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/23435270_1614858011907602_6759242779649551764_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk22-2.fna&oh=805b1bf0a0291f41dffa7ce8ced754dc&oe=5CCC7F05'
				],
				time: '31 December 2018',
				rating: 1.0
			}
		]);
	}
};

const getters = {
	articles(state) {
		return state.articles;
	}
};

export const mutations = {
	[SET_ARTICLE](state, articles) {
		state.articles = articles;
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
