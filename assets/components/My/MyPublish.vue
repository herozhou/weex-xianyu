<template>
	<div class="wrap">
		<div class="head">
			 <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback" class="back"></image>
			<div class="title">我发布的</div>
		</div>
		<div class="block"></div>
		<div class="thingbox" v-if="show"v-for="(item,index) in fabuinfo" key="item.id">
			<div class="username">
				<img :src="url" alt="">
				<p class="name">{{username}}</p>
				<p class="price">￥{{item.price}}</p>
			</div>
			<div class="swiper-box">
		    <swiper :options="swiperOption">
		        <swiper-slide class="show" v-for="(date,index) in item.imgUrls">
				<img class="imgbig" :src="date" alt="">
		        </swiper-slide>
      		</swiper>
    		</div>
			<div class="detail">
				<p class="desc">{{item.desc}}</p>
			</div>
			<div class="bottom">
				<div class="kind">类别：{{item.kind}}</div>
				<div class="time">发布时间：{{item.time}}</div>
			</div>
			<div class="operate">
				<div class="del" v-if="item.del" @click="delorder(item)">删除发布</div>
			</div>
		</div>
		<div v-if="hide" class="nothingbox">
		<div class="nothing">
			<img src="../assets/images/钓鱼.png" alt="">
			<p class="warn">还没有发布宝贝哦</p>
			<p class="fabu" @click="fabu">发布宝贝</p>
		</div>
		</div>
		</div>
	</div>
</template>
<script>
import {MessageBox} from 'mint-ui'
export default {
	data (){
		return {
			fabuinfo: '',
			username: '',
			show: true,
			hide: false,
			url: '',
			swiperOption: {
	          slidesPerView: 'auto',
	          spaceBetween: 30
			}
		}
	},
	mounted () {
		// console.log(window.localStorage.getItem('useravatar'))
  //       this.url = window.localStorage.getItem('useravatar')
		// this.fabuinfo = this.$store.state.mutation.fabuinfo
		// console.log(this.fabuinfo)
		// this.username = this.$store.state.mutation.username
		// this.noFabu()
	},
	methods: {
		back () {
			this.$router.push({path: '/my'})
			this.$store.dispatch('setCurindex',4)
		},
		delorder (e) {
			// MessageBox.confirm('确定要删除你的发布吗？').then( 
			// 	(action) => {
			// 		let i = this.fabuinfo.indexOf(e)
			// 		this.$store.dispatch('cutFabuinfo', i)
			// 		this.noFabu()
			// 	}
			// )
			
		},
		fabu () {
			this.$router.push({path: '/addpic'})
		},
		noFabu () {
			console.log(Array.from(this.fabuinfo).length)
			if(Array.from(this.fabuinfo).length===0){
				this.show = false
				this.hide = true
				console.log(this.show)
			}else{
				this.show = true
				this.hide = false
			}
		}

	}
}
</script>
<style lang="css" scoped>
.wrap {
	width: 100%;
	height: 100vh;
	background-color: #f7f7f7;
	overflow-y: scroll;
}
.head {
	width: 100%;
	height: 4.4rem;
	align-items: center;
	flex-direction: row;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.back img{
	width: 3rem;
	height: 3rem;
}
.title {
	flex: 1;
	text-align: center;
	font-size: 1.6rem;
	font-weight: 700;
}
.block{
	height: 4.4rem;
}
.thingbox {
	width: 95%;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	/*align-items: center;*/
	background-color: #fff;
	margin: 0 auto;
	margin-top: 1rem;
}
.nothingbox{
	width: 100%;
	height: 100%;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	justify-content: center;
}
.nothing {
	width: 20rem;
	height: 20rem;
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.nothing img {
	width: 5rem;
	height: 5rem;
}
.nothing .warn {
	margin: .6rem 0;
	font-size: 1.4rem;
	color: #888;
}
.nothing .fabu{
	color: #000;
	padding: .4rem .8rem;
	box-sizing: border-box;
	background-color: #ffda44;
} 
.username {
	display: -webkit-flex;
	display: flex;
	font-size: 1.4rem;
	height: 5rem;
	/*line-height: 5rem;*/
	align-items: center;
	padding: 0rem 1rem;
	box-sizing: border-box;
	border-bottom: 1px solid #f6f6f6;
}
.username img {
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
}
.name {
	flex:1;
	color: #000;
	font-weight: 700;
	padding-left: 1rem;
	box-sizing: border-box;
	background-position: 0 center;
}
.price {
	color: red;
	font-size: 1.5rem;
}
.detail {
	width: 100%;
	margin-top: .6rem;
	padding: 0 1rem;
	box-sizing: border-box;
}
.swiper-slide{
  width: 10rem!important;
  height: auto;
  padding: 1rem .6rem .6rem .6rem;
  box-sizing: border-box;
  margin-bottom: .4rem;
}
.swiper-slide img{
  width: 10rem;
  height: 10rem;
}
.detail .desc{
	font-size: 1.4rem;
	color: #000;
	font-weight: 600;
}
.bottom{
	display: -webkit-flex;
	display: flex;
	height: 4rem;
	line-height: 4rem;
	padding: 0 1.2rem;
	box-sizing: border-box;
	color: #17abe3;
	border-bottom: 1px solid #f6f6f6;
}
.kind {
	flex: 1;

}
.operate {
	width: 100%;
	height: 4rem;
	display: -webkit-flex;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	position: relative;

}
.del {
	width: 6rem;
	height: 2.5rem;
	text-align: center;
	border: 1px solid #ffda44;
	border-radius: 1.4rem;
	line-height: 2.5rem;
	color: #ffda44;
	position: absolute;
	right: 1.2rem;
}
</style>