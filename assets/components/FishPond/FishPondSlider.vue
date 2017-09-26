<template>
    <div class="wrapper">
            <text style="font-size:15px;border-left-width:5px;border-left-style:solid;border-left-color: #ffda44;margin-left:20px;margin-top:20px ">你可能感兴趣的鱼塘</text>

        <scroller class="tp-box" scroll-direction="horizontal" flex-direction="row" show-scrollbar=false>
            <div class="i-tp" v-for="i in topics">
                <image class="tp-img" resize="cover" :src="i.img"></image>
                <text class="tp-name">{{i.name}}</text>
                <!-- <div style="width:100%;justify-content:center"> --><text class="add">+加入</text><!-- </div> -->
                <!-- <text style="margin-top:30px;text-align:center">新增</text> -->
                 
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
    }

    .tp-box{
        height: 200px;
        padding: 20px;
    }
    .i-tp{
        width: 275px;
        height: 150px;
        margin: 10px;
    }
    .tp-img{
        position: absolute;
        top:0;
        left: 0;
        width: 275px;
        height: 150px;
        border-radius: 10px;
        background-color: #f4f4f4;
    }

    .tp-name{
        font-size: 28px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 57px;
        overflow: hidden;
        text-align: center;
        color:#fff;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .add{
        width: 40%;
        margin: 0 auto;
        text-align: center;
    background-color: #ffda44;
    outline: none;
    border: none;
    color: white;
    font-size: 30px;
    }
</style>
<script>
    export default {
        props:["topics"],
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>