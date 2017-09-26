<template>
    <div class="wrapper"  @click="jumpWeb(url)">
      <!--   <div class="auther-box">
            <image class="auther-img" resize="cover" :src="article.autherImg"></image>
            <text class="auther-name">{{article.auther}}</text>
        </div> -->
        <div class="img-box">
          
                <image   resize="cover" :src="article.img[0]"  style="flex:1;height:100px;width:60px;"></image>
                <image   resize="cover" :src="article.img[1]"  style="flex:1;height:100px;width:60px;"></image>
                <image   resize="cover" :src="article.img[2]"  style="flex:1;height:100px;width:60px;"></image>
            
        </div>
        <div class="tlt-box">
            <text class="tlt">{{article.tlt}}</text>
            <text class="price" v-if="article.price">￥{{article.price}}</text>
        </div>
        <div style="flex-direction:row;justify-content: space-between; align-items:center; border-style:solid;border-width:1px;border-color:#f3f3f3;margin-left:20px;margin-right:20px;">
                <image   resize="cover" :src="article.img[1]"  style="height:60px;width:60px;margin:10px"></image>
                <div style="flex-direction:column;flex:auto;margin:10px" >
                    <text style="text-align:left;margin:2px">变形金刚交流</text>
                      <text style="text-align:left;margin:2px" >超赞的鱼塘</text>
                </div>
                

                <text class="add">进鱼塘</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding: 20px;
    }
    .auther-box{
        height: 75px;
        padding-top: 10px;
        padding-left: 25px;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .auther-img{
        height: 58px;
        width: 58px;
        border-radius: 58px;
    }
    .auther-name{
        flex:1;
        font-size: 26px;
        height: 58px;
        padding-left: 20px;
        padding-top: 10px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380px;
    }
    .sub-imgs-box{
        width: 190px;
        height: 380px;
    }
    .sub-img{
        height: 188px;
        width: 190px;
        margin-left: 3px;
        margin-bottom: 3px;
    }
    .tlt-box{
       

        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
    }
    .tlt{
        flex: 1;
          font-size: 30px;
        line-height: 30px;

        font-weight: 900;
        margin-top: 10px;
        margin-bottom: 10px;

    }
    .price{
        font-size: 34px;
        color:#b4282d;
         margin-top: 10px;
        margin-bottom: 10px;
    }
    .info{
        font-size: 26px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
        lines:2;
        text-overflow: ellipsis;
        color:#666;
    }

     .add{
        width: 100px;
        height: 50px;
        text-align: center;
    outline: none;
    color: black;
    font-size: 28px;
    border-style:solid;
    border-width:1px;
    border-color:black;
    margin:5px
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../../../src/assets/util';
    export default {
        props:["article","url"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/web.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>