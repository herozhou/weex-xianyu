<template>
    <div class="wrapper">
        <div class="scan">
            <text class="ic iconfont">&#xe606;</text>
            <text class="txt">扫一扫</text>
        </div>
        <text class="search iconfont"  @click="jumpWeb()">&#xe65c; 搜索商品，共8888款好物</text>
        <div class="notice" @click="jumpto('category')">
            <text class="ic iconfont">&#xe7f9;</text>
            <text class="txt">分类</text>
        </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114px;
        padding-top: 44px;
        display:flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #ffda44;
        opacity: .99;
    }
    .scan,.notice{
        height: 80px;
        width: 96px
    }
    .ic,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic{
        font-size: 32px;
    }
    .txt{
        font-size: 18px;
     }
    .search {
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #fff;
        border-radius: 8px;
    }
</style>
<script>
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
            jumpto(_url) {
                this.$router.push(_url);
            }
        }
    }
</script>