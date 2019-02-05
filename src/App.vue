<template>

  <v-app>
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
            src="./assets/logo.png"
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
            to="eiei"
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
    <main>
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

      <router-view></router-view>
    </main>
  </v-app>

  <!-- <div> -->
  <!-- <div class="head"> -->
  <!-- header -->
  <!-- <el-menu
        :router="true"
        :default-active="activeIndex"
        active-text-color="#f37335"
        class="menu"
        mode="horizontal"
      >
        <img
          style="outline:none;width:75px;float:left;padding-right:3%;padding-left:3%"
          src="./assets/logo.png"
        >
        <el-menu-item index="/">Home</el-menu-item>
        <el-submenu index="blog">
          <template slot="title">Blog</template>
          <el-menu-item index="/blog/ku">KU</el-menu-item>
          <el-menu-item index="/blog/cu">CU</el-menu-item>
        </el-submenu>

        <div style="padding-right:2%;float:right;padding-top:10px;outline: none;">
          <PlainBtn
            v-if="!isAuthenticated"
            :onClick="openDialog"
            :type="'orange'"
            :title="'Sign in'"
          > </PlainBtn>
          <div v-else>{{getUser.displayName}}&nbsp;
            <PlainBtn
              :onClick="signOut"
              :type="'orange'"
              :title="'Sign out'"
            > </PlainBtn>
          </div>
        </div>
      </el-menu> -->

  <!-- </div> -->

  <!-- <div class="main"> -->
  <!-- <el-dialog
    style="padding-top:10%;padding-left:25%;height:auto;width:100%"
    :visible.sync="dialogVisible"
  >
    <div
      align="center"
      v-loading="isLoading"
    >
      <p style="font-size: 35px;"> Welcome Back!</p>
      <p style="padding-top:20px;font-size: 24px; color: #a6a6a6"> Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you.</p>
      <div style="padding-top:20px; padding-bottom:15px;">
        <SignInFacebookBtn /> OR
        <SignInGoogleBtn />
      </div>
      <p style="font-size: 20px; color: #a6a6a6"> Click “Sign in” above to accept Medium’s Terms of Service and Privacy Policy.</p>
    </div>
  </el-dialog> -->

  <!-- component from router -->
  <!-- <router-view /> -->
  <!-- </div> -->
  <!-- </div> -->
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

<style>
* {
	text-transform: none !important;
	/* font-family: 'Kanit', sans-serif; */
}
</style>
</style>
