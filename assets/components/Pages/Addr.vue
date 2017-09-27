<template>
	<div class="wrap">
		<div class="head">
			<div class="back">
			  <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E8%25BF%2594%25E5%259B%259E.png" @click="goback"></image>

			</div>
			<div class="title"> <text>添加新地址</text> </div>
			<div class="save" @click="save"> <text>保存</text> </div>
		</div>
		<div class="addrbox">
			<div class="set">
				<label for="" class="label" >收货人</label>
				<input  type="text" v-model="name" />
			</div>
			<div class="set">
				<label for="" class="label">联系电话</label>
				<input type="tel"  v-model="tel" />
			</div>
			<div class="set setadd">
				<label for="" class="label">地址</label>
				
			</div>
			<div class="set settext">
				<textarea v-model="detail" name="moreaddr" placeholder="详细地址"id="more" cols="30" rows="5"></textarea>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			region: {},
			name: '',
			tel: '',
			detail: '',
			site: []
		}
	},
	methods: {
		save () {
			console.log(this.detail)
			if (this.name == '') {
				Toast('请填写收货人姓名')
				return
			}
			if (this.tel == '') {
				Toast('请填写电话号码')
				return
			}
			if (this.site.length == 0) {
				Toast('请选择城市')
				return
			}
			if (this.detail == '') {
				Toast('请填写详细地址，让宝贝早点找到你')
				return
			}
			var addr = {}
			addr.name = this.name
			addr.tel = this.tel
			addr.detail = this.detail
			addr.site = this.site
			console.log(addr.site[0])
			Toast('保存成功')
		},
		change (e) {
			this.site = [e.province,e.city,e.district]
			console.log(this.site)
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

.save{
	font-size: 22px;
	color: red;
	padding-right: 22px;
	box-sizing: border-box;
}
.addrbox {
	margin-top: 50px;
	background-color: #fff;
	
}
.set {
	height: 20px;
	align-items: center;
	flex-direction: row;
	padding: 0 12px;
	box-sizing: border-box;
	border-bottom: 1px solid #f7f7f7
}
.setadd {
	height: 100px;
}
.settext {
	height: 100px;
}
.set .label {
	width: 80px;
	font-size: 14px;
	color: #333;
}
.set input {
	outline: none;
	border: none;
	font-size: 14px;
}
#more {
	width: 100%;
	border: none;
	outline: none;
}
.region-picker {
	flex-direction: column;
	line-height: 2.5;
}
</style>