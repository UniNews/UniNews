<template>

  <v-app>
    <Header></Header>

    <v-container
      fluid
      grid-list-xl
      style="padding-top:4%"
    >
      <router-view></router-view>
    </v-container>
    <Footer> </Footer>
  </v-app>

</template>

<script>
import Footer from '@/components/partials/Footer';
import Header from '@/components/partials/Header';

export default {
	name: 'App',
	components: { Footer, Header }
};
</script>

<style>
* {
	text-transform: none !important;
	/* font-family: 'Kanit', sans-serif; */
}
</style>
</style>
