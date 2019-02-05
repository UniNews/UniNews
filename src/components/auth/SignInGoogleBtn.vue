<template>
  <v-btn
    block
    color="error"
    @click=""
  >
    <v-icon
      left
      class="pr-2"
    >fab fa-google</v-icon>
    <span class="subheading">
      Sign in with Google
    </span>
  </v-btn>

</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_ARTICLE } from '@/store/actions.type';
import { LOGINBYGOOGLE } from '@/store/actions.type';

export default {
	name: 'SignInGoogleBtn',
	components: {},
		methods: {
		signin() {
			this.$store.dispatch(LOGINBYGOOGLE);
		}
	},
	computed: {
		...mapGetters(['getError', 'isLoading'])
	}
};
</script>
