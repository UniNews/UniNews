<template>
	<button @click="signin" class="loginBtn loginBtn--facebook">
		Sign in with Facebook {{this.isLoading}}
	</button>
</template>

<script>
import { mapGetters } from 'vuex';
import { LOGIN } from '@/store/actions.type';

export default {
	name: 'SignInFacebookBtn',
	components: {},
	methods: {
		signin() {
			this.$store.dispatch(LOGIN);
		}
	},
	computed: {
		...mapGetters(['getError', 'isLoading'])
	}
};
</script>

<style>
.loginBtn {
	box-sizing: border-box;
	position: relative;
	/* width: 13em;  - apply for fixed size */
	margin: 0.2em;
	padding: 0 15px 0 46px;
	border: none;
	text-align: left;
	line-height: 34px;
	white-space: nowrap;
	border-radius: 0.2em;
	font-size: 20px;
	color: #fff;
	height: 50px;
}
.loginBtn:before {
	content: '';
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	width: 34px;
	height: 100%;
}
.loginBtn:focus {
	outline: none;
}
.loginBtn:active {
	box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
}

/* Facebook */
.loginBtn--facebook {
	background-color: #3b5998;
}
.loginBtn--facebook:before {
	background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png')
		8px 13px no-repeat;
}
.loginBtn--facebook:hover,
.loginBtn--facebook:focus {
	background-color: #5b7bd5;
	background-image: linear-gradient(#5b7bd5, #4864b1);
}
</style>
