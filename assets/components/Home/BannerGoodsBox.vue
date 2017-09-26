<template>
    <div class="wrapper">
        
        <div class="box" >
            <div  class="i-goods"  v-for="i in goods">
                 <text class="gd-tlt">{{i.tlt}}</text>
                <text class="gd-info">{{i.info}}</text>
                <image class="gd-img" resize="recover" :src="i.img"></image>
               
            </div>
            
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
         margin: 0px auto!important;
        background-color: #fff;
        padding-bottom: 6px;
    }
   
  .i-goods{
    align-items:center;
  }
 
    .box{

        justify-content:space-between;
        width: 700px;
        flex-direction: row;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }
   
    .gd-img{
        height: 60px;
        width: 60px;
        /*background-color: #f4f4f4;*/
    }
    .gd-tlt{
        text-align: center;
        font-size: 28px;
        color:#333;
        width: 120px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        text-align: center;

        display: block;
        font-size: 18px;
        width: 120px;
        margin-top: 8px;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
  
   
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../../../src/assets/util';
    export default {
        props:["newGoods","hotGoods","head","hasMore","goods"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) return;
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/web.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>