<template>
	<div class="wrap">
		<div class="head">
			<div class="back" >
        <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback"></image>

			</div>
			<div class="title"> <text style="text-align:center">宝贝详情</text> </div>
		</div>
		<div class="block"></div>
		<div class="goods">
			<div class="good_top">
				<div class="good_top-avatar">
        <image style="width: 60px;height: 60px;" src="https://sukura7.github.io/vue-xianyu-demo/static/avatar.jpg" class="avatar"></image>

				</div>
				<div class="good_top-info">
					<text class="username">马化云</text>
					 <text style="color:#777" class="ta"> 12分钟前来过来自郑州</text> 
				</div>
				<div class="good_top-price">
					<text class="price">￥118</text>
				</div>
			</div>
			<div class="good_desc">
				<text class="desc">上古神器</text>
			</div>
			<div class="good_img">
				 <image style="width: 400px;height: 400px;" src="https://sukura7.github.io/vue-xianyu-demo/static/01.png" ></image>
				
			</div>
		</div>
		<div class="messagebox">
			<p class="msg">留言</p>
			<div class="conment" v-if="message == ''">
				<image style="height:60px;width:79px" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/yu.png" alt=""></image>
			    <text class="nomsg">还没有人留言，还不快来抢沙发</text> 
			</div>
			<div class="conment" v-else>
				<p class="hasmsg">123</p>
			</div>
		</div>
		<div class="block"></div>
		<div class="fixedbottom">
			<div class="message">
				<image  style="height:24px;width:24px" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/留言.png" alt=""></image>
			    <text class="leabmsg">留言</text> 
			</div>
			<div class="givestar">
				<image style="height:24px;width:24px" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/赞.png" alt="" v-if="show"></image>
				<image src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/赞1.png" alt="" v-else></image>
			    <text class="star">点赞</text> 

			</div>
		 <text class="buy" @click="jump">我想要</text> 
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			news: '',
			message: '',
			show: true,
			isLogin: ''
		}
	},
	mounted () {
		
	},
	methods: {
		jump(){
			this.$router.push('chat')
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
	font-size: 30px;
	font-weight: 700;
	flex:7;
}
.block{
	height: 50px;
}
.goods {
	width: 100%;
	min-height: 100%;
	padding: 15px 12px;
	box-sizing: border-box;
	background-color: #fff;
}
.good_top {
	width: 100%;
	height:60px;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	flex-direction: row;
}
.good_top-avatar {
	width:50px;
	height:50px;
}
.good_top-avatar .avatar {
	width:50px;
	height:50px;
	border-radius: 50%;
}
.good_top-info {
	margin-left:10px;
	flex: 1;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
}
.good_top-info .username {
	color: #000;
	font-size: 17px;
	font-weight: 600;
	margin-bottom: 10px;
}
.good_top-info .ta {
	font-size: 13px;
}
.good_top-price .price{
	color: red;
	font-size: 18px;
}
.good_desc {
	width: 100%;
}
.desc {
	font-size: 15px;
	color: #000;
	line-height: 15px;
	padding: 10px;
}
.good_img {
	width: 100%;
	margin-top: 12px;
}
.good_img img {
	width: 100%;
}
.messagebox {
	margin-top:10px;
	background-color: #fff;
	padding:10px 12px;
}
.messagebox .msg {
	font-size: 20px;
	color: #000;
	font-weight: 600;
	height:40px;
	line-height:20px;
	border-bottom: 1px solid #f8f8f8;
	/*margin-left: 10px;*/
}
.msg:before {
	content: "";
	display: inline-block;
	width: 10px;
	height: 30px;
	background-color: #ffda44;
	margin-right: 10px;
	vertical-align: baseline;
}
.conment {
	width: 100%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px 0;
}
.conment .nomsg {
	margin-top: 10px;
	font-size: 20px;
	color: #888;
}
.fixedbottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 44px;
	align-items: center;
	flex-direction: row;
	background-color: #f8f8f8;
	z-index: 100;
	box-sizing: border-box;
}
.message,.givestar,.buy{
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	
}
.message {
	flex: 1;
	align-items: center;
}
.message img, .givestar img{
	width: 24px;
	height: 24px;
}
.givestar {
	flex: 2;
}
.buy {
	flex: 1;
	background-color: #d81e06;
	height: 44px;
	line-height: 44px;
	text-align: center;
	color: #fff;
	font-size: 20px;
}
.leabmsg{
	font-size: 13px;
}
.star{
	font-size: 13px;

}
</style>