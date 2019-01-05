<template>
	<a @click="onClick" :class="['transparent_btn', type]">{{this.title}}</a>
</template>

<script>
export default {
	name: 'PlainBtn',
	props: {
		title: String,
		type: String,
		onClick: Function
	}
};
</script>

<style>
.transparent_btn {
	display: inline-block;
	padding: 10px 14px;
	color: #fff;
	border: 1px solid #fff;
	text-decoration: none;
	font-size: 16px;
	line-height: 120%;
	background-color: rgba(255, 255, 255, 0);
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	-webkit-transition: background-color 300ms ease;
	-moz-transition: background-color 300ms ease;
	transition: background-color 300ms ease;
	cursor: pointer;
	outline: none;
}

/* Orange Button */
.transparent_btn.orange {
	color: #ffc65d;
	border-color: #ffc65d;
}
.transparent_btn.orange:hover {
	background-color: rgba(255, 218, 163, 0.3);
}
</style>
