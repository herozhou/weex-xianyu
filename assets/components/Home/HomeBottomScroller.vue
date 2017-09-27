<template>
    <div class="wrapper">

        <scroller class="box" scroll-direction="horizontal" flex-direction="row" show-scrollbar=false>
            <div class="i-good" v-for="i in goods" >
                <text class="gd-tlt">{{i.tlt}}</text>
                <text class="gd-info">{{i.info}}</text>
                <div style="flex-direction:row">
                <text class="gd-notice">公告</text>
                <text class="gd-info">  {{i.notice}}</text>
                    
                </div>

                <div style="flex-direction:row;height:60px;">
                 <image class="gd-img" resize="cover" :src="i.img1"></image>
                <image class="gd-img" resize="cover" :src="i.img2"></image>

                <image class="gd-img" resize="cover" :src="i.img3"></image>
                </div>
              
                <div class="gd-price"> 
                <image style="height:15px;width:15px;" resize="cover" :src="position_img_base64"></image>
                  <text>距离你{{i.distance}}米 </text></div>
            </div>
            <div class="i-good" v-if="hasMore">
                <text class="gd-more">查看全部</text>
            </div>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-bottom: 6px;
    }
    .tlt-box{
        height: 260px;
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tlt{
        margin-top: 76px;
        text-align: center;
        font-size: 34px;
        color:#8BA0B6;
    }
    .tlt-hot{
        color:#B4A078;
    }
    .btn-all{
        text-align: center;
        font-size: 26px;
        width: 220px;
        padding: 10px;
        margin-top: 20px;
        color:#8BA0B6;
        border-radius: 4px;
        background-color: #D8E5F1;
    }
    .btn-hot{
        color:#B4A078;
        background-color: #F4E9CB;
    }
    .tlt-image{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .box{
        width: 750px;
        height: 400px;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .i-good{
        background-color: #f4f4f4;
        margin-left: 15px;
        margin-right: 15px;
    }
    .gd-img{
        flex:1;
        background-color: #f4f4f4;
    }
    .gd-tlt{
        padding:10px; 
        font-size: 28px;
        color:#333;
        width: 286px;
        margin-top: 16px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        padding:10px; 
        display: block;
        font-size: 24px;
        width: 286px;
        margin-top: 8px;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
     .gd-notice{
     border-width: 1px;
     border-style:  solid;
     border-color:  #7dc5eb;
    font-size: 30px;
    line-height: 40px;

    vertical-align: middle;
    box-sizing: border-box;
     color: #7dc5eb; 
     }
    .gd-price{
        text-align: center;
        font-size: 28px;
        width: 286px;
        margin-top: 16px;

        overflow: hidden;
        lines:1;
        flex-direction: row;
        justify-content: center;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-more{
        height: 286px;
        width: 286px;
        font-size: 28px;
        line-height: 40px;
        border-width: 6px;
        padding-top: 120px;
        padding-bottom: 120px;
        border-color: #f4f4f4;
        text-align: center;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../../../src/assets/util';
    export default {
        props:["head","hasMore","goods"],
        data () {
            return {
                position_img_base64:"data:image/png;base64,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"
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
            },
           
        }
    }
</script>