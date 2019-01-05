<template>
	<div>
		<div class="head">
			<!-- header -->
			<el-menu :router="true" :default-active="activeIndex" active-text-color="#f37335" class="menu" mode="horizontal">
				<img style="outline:none;width:75px;float:left;padding-right:100px;padding-left:100px" src="./assets/logo.png">
				<el-menu-item index="/">Home</el-menu-item>
				<el-submenu index="blog">
					<template slot="title">Blog</template>
					<el-menu-item index="/blog/ku">KU</el-menu-item>
					<el-menu-item index="/blog/cu">CU</el-menu-item>
				</el-submenu>
				<el-menu-item index="/profile" disabled>Profile</el-menu-item>
				<el-menu-item index="/policy">
					Policy
				</el-menu-item>
				<el-menu-item index="/contact-us">
					Contact Us
				</el-menu-item>

				<div style="padding-right:2%;float:right;padding-top:10px;outline: none;">
					<PlainBtn v-if="!isAuthenticated" :onClick="openDialog" :type="'orange'" :title="'Sign in'"> </PlainBtn>
					<div v-else>{{getUser.displayName}}&nbsp;
						<PlainBtn :onClick="signOut" :type="'orange'" :title="'Sign out'"> </PlainBtn>
					</div>
				</div>
			</el-menu>
		</div>

		<div class="main">
			<el-dialog style="padding-top:10%;padding-left:25%;height:auto;width:100%" :visible.sync="dialogVisible">
				<div align="center" v-loading="isLoading">
					<p style="font-size: 35px;"> Welcome Back!</p>
					<p style="padding-top:20px;font-size: 24px; color: #a6a6a6"> Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</p>
					<div style="padding-top:20px; padding-bottom:15px;">
						<SignInFacebookBtn/> OR
						<SignInGoogleBtn/>
					</div>
					<p style="font-size: 20px; color: #a6a6a6"> Click “Sign in” above to accept Medium’s Terms of Service and Privacy Policy.</p>
				</div>
			</el-dialog>

			<!-- component from router -->
			<router-view />
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { LOGOUT } from '@/store/actions.type';

import PlainBtn from '@/components/common/PlainBtn';
import SignInFacebookBtn from '@/components/auth/SignInFacebookBtn';
import SignInGoogleBtn from '@/components/auth/SignInGoogleBtn';

export default {
	name: 'App',
	components: { PlainBtn, SignInFacebookBtn, SignInGoogleBtn },
	data() {
		return {
			activeIndex: this.$route.path,
			dialogVisible: false,
			loading: true
		};
	},
	methods: {
		openDialog() {
			this.dialogVisible = true;
		},
		signOut() {
			this.$store.dispatch(LOGOUT);
		}
	},
	computed: {
		...mapGetters(['getUser', 'isAuthenticated', 'isLoading'])
	},
	watch: {
		isAuthenticated(value) {
			if (value) {
				this.dialogVisible = false;
			}
		}
	}
};
</script>

<style>
.head {
	text-align: center;
	font-family: 'Kanit', sans-serif;
}

.main {
	font-family: 'Kanit', sans-serif;
}

.menu {
	position: fixed; /* Set the navbar to fixed position */
	width: 100%;
}
</style>
