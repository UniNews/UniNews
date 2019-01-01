<template>
	<div>
		<div class="head">
			<!-- header -->
			<el-menu :router="true" :default-active="activeIndex" active-text-color="#f37335" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<img style="width:75px;float:left;padding-right:100px;padding-left:100px" src="./assets/logo.png">
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
			</el-menu>
		</div>

		<div class="main">
			<!-- component -->
			<router-view />
		</div>

	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		console.log(this.$route.path);
		return {
			activeIndex: this.$route.path
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(this.$route.path);
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
</style>
