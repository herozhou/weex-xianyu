<template lang="html">
	<div class="wrap">
		<div class="head">
				 <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback" class="back"></image>
			 <text class="title">分类</text> 
		</div>
		<div class="block"></div>
		<div class="navbar">
			<div class="nav">
				<div  class="item" :data-url="category.url" v-for="category in categories" key="category.id" :data-name="category.name"
				@click="selecteItem"> <text style="text-align:center;font-size:13px;color:#888">{{category.name}}</text> </div>
			</div>
			<div class="content">
			  <div class="topbox">
			  	<text class="categoryname all">{{title}}全部</text>
			  </div>
			
			  <div class="container">
			      <div class="content-item" v-for="item in items">
			      	<div class="flex">
				        <div class="imgbox">
				          <!-- <img :src="item.img" alt=""> -->
				        </div>
				        <text class="desc">{{item.desc}}</text>
				    </div>
			      </div>
			  </div>
		    </div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		selecteItem () {
			// let oUrl = event.currentTarget.dataset.url
			  // this.title = event.currentTarget.dataset.name
		      // this.selected = oUrl
		 //      if(document.querySelector('.selected'))  {
		 //        document.querySelector('.selected').classLis5pxove('selected')
		 //      }
		 //      event.currentTarget.classList.add('selected')
		 //      this.axios.get('https://easy-mock.com/mock/593787f691470c0ac107cacf/category/' + oUrl)
			//         .then((response) => {
			//          	this.items = response.data.imglist
   //      				console.log(response.data.imglist)
			//       })
			//       .catch(function (error) {
			//         console.log(error) 
			//       })
			    },
			  goback(){
						this.$router.go(-1);
				
			}
		    
	},
	data () {
		return {
			items: [],
			title: '',
			selected: '',
			categories:[
				{
					'id': 1,
					'url': 'house',
					'name': '房屋租赁'
				},
				{
					'id': 2,
					'url': 'server',
					'name': '技能服务'
				},
				{
					'id': 3,
					'url': 'phones',
					'name': '移动电话'
				},
				{
					'id': 4,
					'url': 'dress',
					'name': '女士服装'
				},
				{
					'id': 5,
					'url': 'digital',
					'name': '3C数码'
				},
				{
					'id': 6,
					'url': 'makeup',
					'name': '个护美妆'
				},
				{
					'id': 7,
					'url': 'bag',
					'name': '箱包'
				},
				{
					'id': 9,
					'url': 'sports',
					'name': '运动户外'
				},
				{
					'id': 10,
					'url': 'electtical',
					'name': '家用电器'
				},
				{
					'id': 11,
					'url': 'music',
					'name': '玩具乐器'
				},
				{
					'id': 12,
					'url': 'music',
					'name': '珠宝首饰'
				},
				{
					'id': 13,
					'url': 'music',
					'name': '女士鞋靴'
				},
				{
					'id': 14,
					'url': 'music',
					'name': '动漫/周边'
				},
				{
					'id': 15,
					'url': 'music',
					'name': '汽车/用品'
				},
				{
					'id': 16,
					'url': 'music',
					'name': '游戏设备'
				},
				{
					'id': 17,
					'url': 'music',
					'name': '居家日用'
				},
				{
					'id': 18,
					'url': 'music',
					'name': '宠物/用品'
				},
				{
					'id': 19,
					'url': 'music',
					'name': '男士服装'
				},
				{
					'id': 20,
					'url': 'music',
					'name': '钟表眼镜'
				},
				{
					'id': 21,
					'url': 'music',
					'name': '办公用品'
				},
				{
					'id': 22,
					'url': 'music',
					'name': '服饰配件'
				},
			]
		}
	},
	mounted () {
	// this.title = document.querySelectorAll('.item')[0].innerHTML
	// document.querySelectorAll('.item')[0].classList.add('selected')
 //    this.axios.get('https://easy-mock.com/mock/593787f691470c0ac107cacf/category/house')
 //      .then((response) => {
 //        this.items = response.data.imglist
 //        console.log(response.data.imglist)
 //      })
 //      .catch(function (error) {
 //        console.log(error) 
 //      })
  },
}
</script>
<style lang="css" scoped>
.body{
	background-color: white;
	
}
.nav {
	width: 100px;
	flex-direction: column;
	border-right: 1px solid #f8f8f8;
	font-size: 15px;
	text-align: center;
	height: 600px;
	overflow-y: scroll;
	flex:1;
}
.navbar{
	background-color: white;
flex-direction: row;
}
.content {
	flex: 3;
	padding: 5px;
}
.content .topbox {
	width: 100%;
	height:40px;
	line-height:40px;
	font-size: 15px;
	color: #000;
	font-weight: 600;
}
.categoryname {
	width: 100%;
	position: relative;
}
.all{
	display: inline-block;
	position: absolute;
	right:10px;
	color: #7dc5eb;
	text-align: right;
}
.categoryname:after{
	content: '';
	display: inline-block;
	height: 8px;
	width: 8px;
	border-width: 2px 2px 0 0;
	border-color:#7dc5eb;
	border-style: solid;
	transform: rotate(45deg);
	right: 0;
	top: 15px;
}
.new {
	margin-top: 5px;
	width: 5px;
	height:5px;
	text-align: center;
	line-height:5px;
	background-color: #f8f8f8;
	margin-bottom: 15px;
}
.newmes{
	font-size: 15px;
}
.newmes:after{
	content: '';
    display: inline-block;
    height: 5px;
    width: 5px;
    border-width: 2px 2px 0 0;
    border-color: #ffda44;
    border-style: solid;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    position: relative;
    top: -5px;
    margin-left: 5px;
}
.container {
	width: 100%;

}
.content-item {
	width: 33.3333333%;
	height:60px;
	display: inline-block;
	margin-bottom: 15px;
}
.content-item .flex{
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-direction: column;
	align-items: center;

}
.flex .desc{
	margin-top: 5px;
	font-size: 15px;
	color: #000;
}
.imgbox{
	width:40px;
	height:40px;
}
.imgbox img {
	width:40px;
	height:40px;
}
.item {
	width: 100%;
	padding:10px 0;
	box-sizing: border-box;
	color: #888;
}
.item.selected{
	color: #000;
	font-weight: 700;	
	/*background-color: #ffda44;*/
}
.item.selected:before {
	content: '';
	width: 5px;
	height:5px;
	background-color: #ffda44;
	display: inline-block;
	vertical-align: middle;
	position: absolute;
	left: 0;

}
.detail{
	flex: 2;
	background-color: red;
}
.wrap {
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.head {
	align-items: center;
	border-bottom: 1px solid #f8f8f8;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 45px;
	z-index: 1000;
	flex-direction: row;
	background-color: #f7f7f7;
}
.back img{
	width:5px;
	height:5px;
}
.title {
	flex: 1;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
}
.block {
	height: 45px;
}
</style>