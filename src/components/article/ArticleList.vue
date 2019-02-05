<template>
  <v-layout
    row
    wrap
    justify-space-between
  >
    <v-flex
      lg4
      sm6
    >
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            flat
            color="orange"
          >Share</v-btn>
          <v-btn
            flat
            color="orange"
          >Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex
      lg4
      sm6
    >
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            flat
            color="orange"
          >Share</v-btn>
          <v-btn
            flat
            color="orange"
          >Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex
      lg4
      sm6
    >
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn
            flat
            color="orange"
          >Share</v-btn>
          <v-btn
            flat
            color="orange"
          >Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <el-row :gutter="20">
		<el-col :span="8" v-for="data in articles">

			<el-card :body-style="{ padding: '0px' }" shadow="hover">
				<el-carousel style="height:200%" :autoplay="false" trigger="click" height="280px">
					<el-carousel-item v-for="img in data.imgs">
						<img :src="`${img}`" class="image">
					</el-carousel-item>
				</el-carousel>
				<div style="padding: 14px;">
					<span class="header">
						{{data.title}}
					</span>
					<p style="padding-top:10px">{{data.description}}</p>
					<el-rate v-model=data.rating[data.rating.length-1].rating style="padding-top:10px" disabled show-score text-color="#ff9900"  score-template="{value} points"></el-rate>
					<div class="bottom clearfix">
						<time class="time">{{ data.timeStamp }}</time>
						<el-button type="text" class="button">อ่านเพิ่มเติม</el-button>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row> -->
</template>

<script>
import { mapGetters } from 'vuex';
import { FETCH_ARTICLE } from '@/store/actions.type';

export default {
	name: 'ArticleList',
	components: {},
	methods: {
		fetchArticles() {
			this.$store.dispatch(FETCH_ARTICLE);
		}
	},
	mounted: function() {
		this.fetchArticles();
	},
	computed: {
		...mapGetters(['articles'])
	}
};
</script>

<style>
.image {
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
}

.header {
	font-size: 20px;
	background: linear-gradient(to right, #f37335 0%, #fdc830 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: bold;
	font-style: italic;
}
</style>
