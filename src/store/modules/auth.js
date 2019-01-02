import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './../mutations.type';
import {
	LOGIN,
	LOGOUT,
	REGISTER,
	CHECK_AUTH,
	UPDATE_USER
} from './../actions.type';

// initial state
const state = {
	errors: null,
	user: {},
	isAuthenticated: false
};

const getters = {
	currentUser(state) {
		return state.user;
	},
	isAuthenticated(state) {
		return state.isAuthenticated;
	}
};

const actions = {
	[LOGIN](context, credentials) {
		console.log("LOGIN CALLED!")
		context.commit(SET_AUTH, 'Mond User');
	},
	[LOGOUT](context) {
		console.log("LOGOUT CALLED!")
		context.commit(PURGE_AUTH);
	},
	[REGISTER](context, credentials) {
		console.log("REGISTER CALLED!")
		context.commit(SET_ERROR, 'this function is not implemented yet.');
	},
	[CHECK_AUTH](context) {},
	[UPDATE_USER](context, payload) {
		const { email, username, password, image, bio } = payload;
		const user = {
			email,
			username,
			bio,
			image
		};
		if (password) {
			user.password = password;
		}
		context.commit(SET_AUTH, user);
	}
};

const mutations = {
	[SET_ERROR](state, error) {
		state.errors = error;
	},
	[SET_AUTH](state, user) {
		state.isAuthenticated = true;
		state.user = user;
		state.errors = {};
		// JwtService.saveToken(state.user.token);
	},
	[PURGE_AUTH](state) {
		state.isAuthenticated = false;
		state.user = {};
		state.errors = {};
		// JwtService.destroyToken();
	}
};

export default {
	state,
	actions,
	mutations,
	getters
};
