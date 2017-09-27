<template lang="html">
<div class="wrap">
	<div class="head">
		<div class="back" >
			  <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback"></image>
		</div>
		<text class="title"> 购买宝贝</text>
	</div>
	<div class="goodswrap">
		 <image style="width: 100px;height: 100px;" src="https://sukura7.github.io/vue-xianyu-demo/static/02.png"  class="goodimg"></image>
		<div class="goodinfo">
			<text class="detail">[转卖]变形金刚</text>
			<text class="price">￥111</text>
		</div>
	</div>
	<div class="addrbox">
		<div class="addr" @click="setaddr">
			<label for="" class="label">收货地址</label>
			<!-- <div class="address" v-if="addr.name != undefined">
				<text class="user">{{addr.name}}{{addr.tel}}</text>
				<text class="addrdetail">{{addr.site[0]}}{{addr.site[1]}}{{addr.site[2]}}{{addr.detail}}</text>
			</div> -->
			<div class="address">
				<text class="addrdetail">请选择地址</text>
			</div>
		</div>
		<div class="addr">
			<label for="" class="label">运费</label>
			<text class="freight">￥1231</text>
		</div>
	</div>
	<div class="fixedbottom">
		<div class="payment">
			<text class="all">实付款：</text>
			<text class="price">{{all}}</text>
		</div>
		  <text class="buy" @click="pay">确定</text> 
	</div>
</div>
</template>
<script>
export default {
	data () {
		return {
			news: '',
			addr: {},
			all: 0
		}
	},
	mounted () {
	
	},
	methods: {
		setaddr () {
			this.$router.push({path:'/addr'})
		},
		pay () {
		
		},
		setbuyinfo (i) {
			
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
.title {
	text-align: center;
	font-size: 22px;
	font-weight: 700;
	flex:7;
}

.goodswrap {
	width: 100%;
	/*height: 100px;*/
	margin-top: 50px;
	background-color: #fff;
	flex-direction: row;
}

.goodswrap .goodinfo {

	padding:10px 12px;
	box-sizing: border-box;
}
.detail {
	font-size: 17px;
	color: #000;
	margin-bottom: 6px;
	line-height: 1.6;
}
.price {
	font-size: 20px;
	font-weight: 600;
	color: red;
}
.addrbox {
	width: 100%;
	margin-top:10px;
	background-color: #fff;
}
.addr {
	width: 100%;
	height:60px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding:0 12px;
	box-sizing: border-box;
	border-bottom: 1px solid #f7f7f7;
}
.addr .label {
	flex: 1;
	font-size: 15px;
	color: #666;
}
.addr .address {
	align-items: center;
	flex-direction: column; 
	font-size: 13px;
	color: #888;
	line-height: 1.2;
}
.addr .freight {
	width: 80px;
	color: red;
	font-size: 21px;
	position: relative;
	text-align: right;
} 
.addr .addrdetail:after {
	content: '';
	display: inline-block;
	height: 8px;
	width: 8px;
	border-width: 2px 2px 0 0;
	border-color:#999;
	border-style: solid;
	transform: rotate(45deg);
	position: absolute;
	right:5px;
}
.fixedbottom {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	align-items: center;
	background-color: #fff;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 12px;
}
.fixedbottom .payment {
	flex-direction: row;
}
.all, .price{
	font-size: 15px;
	color: #000;
}
.price {
	color: red;
}
.buy {
	width: 80px;
	height: 50px;
	text-align: center;
	color:white;
	background-color: red;
	line-height: 50px;
	color: #fff;
	text-align: center;
	font-size: 15px;
}
</style>
