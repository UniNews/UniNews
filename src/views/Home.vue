<template>
	<div>
		<Quote> </Quote>

		<div class="hotNews">
			<p class="text">
				<i class="el-icon-loading"></i> Hot
				<span>News</span>
			</p>

			<ArticleList> </ArticleList>

		</div>

	</div>
</template>

<script>
import Quote from '@/components/home/Quote';
import ArticleList from '@/components/article/ArticleList';

export default {
	name: 'Home',
	components: { Quote, ArticleList }
};
</script>

<style>
.hotNews {
	padding-top: 2%;
}

.hotNews p.text {
	text-align: center;
	font-size: 40px;
	padding-bottom: 1%;
}

.hotNews p.text span {
	color: rgb(255, 170, 11);
}
</style>
