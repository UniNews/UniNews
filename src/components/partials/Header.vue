<template>
  <div>
    <v-navigation-drawer
      temporary
      v-model="sideNav"
      app
    >
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      dark
      class="warning"
    >
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-items>

        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <img
            class="pt-2 pl-5"
            style="height:55px;"
            src="@/assets/logo.png"
          ></img>

        </router-link>
        <v-btn
          disable
          flat
          class="title"
        >
          UniNews
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items class="pr-3 hidden-xs-only">
        <v-btn
          class="subheading"
          flat
        >
          <v-icon
            class="pr-1"
            left
            dark
          >home</v-icon>
          Home
        </v-btn>
        <v-btn
          class="subheading"
          flat
        >
          <v-icon
            class="pr-1"
            left
            dark
          >supervisor_account</v-icon>
          Blog
        </v-btn>
        <v-btn
          class="subheading"
          v-if="!isAuthenticated"
          flat
          @click="openDialog"
        >
          Get Started
          <v-icon
            right
            dark
          >navigate_next</v-icon>
        </v-btn>
        <v-layout v-else>
          <v-btn
            flat
            class="body-2"
          >
            <v-avatar class="pr-3">
              <img
                src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-1/28577899_790880621104128_4654599030704530848_n.jpg?_nc_cat=109&_nc_ht=scontent.fbkk22-2.fna&oh=2eb8045f86f08347aae32556121a75c4&oe=5CD79B7C"
                alt="Jimmy"
              >
            </v-avatar>
            Jamie Satrira
          </v-btn>
          <v-btn
            @click="signOut"
            flat
          >
            Sign Out
            <v-icon
              left
              dark
            >keyboard_arrow_right</v-icon>
          </v-btn>
        </v-layout>

      </v-toolbar-items>

    </v-toolbar>
    <v-dialog
      v-model="dialogVisible"
      max-width="600"
    >

      <v-card>

        <v-card-title style="font-size: 25px">
          Welcome Back! </v-card-title>

        <v-card-text style="font-size: 20px; color: #a6a6a6">
          Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.
        </v-card-text>

        <v-card-actions>
          <v-layout
            row
            wrap
          >
            <v-flex
              lg6
              sm12
            >
              <SignInFacebookBtn />
            </v-flex>
            <v-flex
              lg6
              sm12
            >
              <SignInGoogleBtn />
            </v-flex>
          </v-layout>

        </v-card-actions>
        <v-card-text style="font-size: 15px; color: #a6a6a6">
          Click “Sign in” above to accept Medium’s Terms of Service and Privacy Policy. </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { LOGOUT } from '@/store/actions.type';
import SignInFacebookBtn from '@/components/auth/SignInFacebookBtn';
import SignInGoogleBtn from '@/components/auth/SignInGoogleBtn';
import PlainBtn from '@/components/common/PlainBtn';

export default {
	name: 'Header',
	components: { PlainBtn, SignInFacebookBtn, SignInGoogleBtn },
	data() {
		return {
			activeIndex: this.$route.path,
			dialogVisible: false,
			loading: true,
			sideNav: false
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
