<template>
	<el-container>
		<el-header height="auto">
			<!-- header -->
			<img style="width:15%" src="./assets/logo.png">
			<el-menu :router="true" :default-active="activeIndex" active-text-color="#f37335" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
		</el-header>

		<el-main height="auto">
			<!-- component -->
			<router-view/>
		</el-main>

	</el-container>
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
	},
	watch: {
		$route(newVal, oldVal) {
			this.activeIndex = newVal.path;
		}
	}
};
</script>

<style>
.el-header {
	text-align: center;
	font-family: 'Kanit', sans-serif;
}
.el-main {
	padding-right: 3%;
	padding-left: 3%;
	font-family: 'Kanit', sans-serif;
}
</style>

