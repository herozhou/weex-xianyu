<template>
	<div class="wrap">
		<div class="head">
			<div class="back">
				  <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback"></image>
			</div>
			 <text  class="title">马化云</text> >
		</div>
		<div class="container">
			<div class="goodinfo">
					 <image style="width: 60px;height: 60px;" src="https://sukura7.github.io/vue-xianyu-demo/static/01.png" class="avatar"></image>
				<div class="gooddesc">
					<text class="price">￥118</text>
					<text class="yunfei">含运费123元</text>
					<text class="chat">交易前聊一聊</text>

				</div>
			 <text class="buy" @click="buy">立即购买</text>
			</div>
		</div>
		<ChatList :news="news"></ChatList>
	</div>
</template>
<script>
import ChatList from './ChatList.vue'
export default {
	components: {
		ChatList,
	},
	data () {
		return {
			news: {},
			username: ''
		}
	},
	mounted () {
		// document.documentElement.scrollTop = document.body.scrollTop = 0
		// this.username = this.$store.state.mutation.username
		// this.news= this.$store.state.mutation.news
	},
	methods: {
		buy () {
			this.$router.push('pay')
		},
		goback(){
			this.$router.go(-1);
			
		}
	}
}
</script>
<style lang="css" scoped>
.wrap {
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
	z-index: 300;
}
.head {
	width: 100%;
	height: 40px;
	align-items: center;
	background-color: #f7f7f7;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	flex-direction: row;
	z-index: 500;
}
.back img{
	width:10px;
	height:10px;
}
.title {
	text-align: center;
	font-size: 20px;
	font-weight: 700;
	flex:7;
}

.container {
	position: absolute;
	top:10px;
	left: 0;
	right: 0;
	flex-direction: row;
	margin-top: 50px;
}
.goodinfo {
	background-color: #fff;
	display: -webkit-flex;
	display: flex;
	width: 100%;
	align-items: center;
	padding: 10px;
	flex-direction: row;
	box-sizing: border-box;
	border-bottom: 10px solid #f7f7f7;
}


.gooddesc {

	flex: 1;
	margin-left:10px;
	flex-direction: column;
}
.gooddesc .price {
	font-size: 15px;
	color: #000;
}
.gooddesc .chat, .gooddesc .yunfei{
	font-size: 14px;
	color: #888;
}
.gooddesc .yunfei {
	margin-bottom: 10px;
}
.buy {
	background-color: red;
	height: 45px;
	line-height: 45px;
	width: 80px;
	text-align: center;
	color: #fff;
	font-size: 14px;
}

</style>