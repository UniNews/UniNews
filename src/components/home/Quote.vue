<template v-show="errors">
  <!-- <div>
		<div class="intro">
			<img style="height:100%; padding-right:6%" align=right src="@/assets/varit.png">
			<p class="quote">
				Best of the best news application you even seen.
				<br>
				<span class="note">- Varit Assavavisidchai -</span>
				<br>
				<button class="signupBtn">
					Sign Up Now!
				</button>
			</p>
		</div>
		<hr>
	</div> -->
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to the site!</h3>

            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

            <div class="title mb-3">Check out our newest features!</div>

            <v-btn
              class="mx-0"
              color="warning"
              large
            >
              Get started
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
	name: 'Quote'
};
</script>

<style>
hr {
	border: none;
	height: 1px;
	display: block;
	box-shadow: 3px 3px 10px rgb(0, 0, 0);
}
.intro {
	height: 450px;
	background: linear-gradient(
		to bottom,
		#f7971e,
		#ffd200
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.intro .quote {
	font-weight: regular;
	font-size: 40px;
	color: white;
	position: absolute;
	float: left;
	top: 20%;
	left: 7%;
	font-style: italic;
}

.intro .note {
	font-size: 30px;
}

.signupBtn {
	cursor: pointer;
	font-weight: bold;
	border: solid 2px white;
	background: white;
	border-radius: 50px;
	width: 170px;
	height: 50px;
	font-size: 20px;
	color: rgb(255, 170, 11);
	outline: none;
}

.time {
	font-size: 13px;
	color: #999;
}

.bottom {
	padding-top: 5px;
	margin-top: 13px;
	line-height: 12px;
}

.button {
	padding: 0;
	float: right;
}
.signupBtn:hover {
	background: rgba(250, 249, 249, 0);
	color: white;
}
</style>
