<template>
  <v-btn
    block
    color="primary"
    @click="signin"
  >
    <v-icon
      left
      class="pr-2"
    >fab fa-facebook</v-icon>
    <span class="subheading">
      Sign in with Facebook
    </span>
  </v-btn>
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

