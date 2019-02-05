<template>
  <div>
    <Quote v-if="!isAuthenticated"> </Quote>

    <ArticleList> </ArticleList>

  </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Quote from '@/components/home/Quote';
import ArticleList from '@/components/article/ArticleList';

export default {
	name: 'Home',
	components: { Quote, ArticleList },
	computed: {
		...mapGetters(['isAuthenticated'])
	}
};
</script>
