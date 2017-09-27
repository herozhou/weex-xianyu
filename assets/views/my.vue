<template>
    <div class="wrapper">
        <div class="top">
            <div class="loginhead">
                <div class="flex border">
                    <div class="flexprimary">
                        <div class="name"><text >马化云</text></div>
                        <div class="somedesc">
                            <text style="font-size:12px;color:#888">虽然没挣到钱，但在闲鱼开心就好</text>
                        </div>
                    </div>
                    <div class="useravatar" >
        <image style="width: 60px;height: 60px;" src="https://sukura7.github.io/vue-xianyu-demo/static/avatar.jpg"></image>

                    </div>
                </div>

                <div class="flex">
                    <div class="numbox">
                        <span class="num">1</span>
                        <span class="numname">被赞数</span>
                    </div>
                    <div class="numbox">
                        <span class="num">2</span>
                        <span class="numname">关注数</span>
                    </div>
                    <div class="numbox">
                        <span class="num">3</span>
                        <span class="numname">粉丝数</span>
                    </div>
                </div>
            </div>
            <div class="open flex">
                    <div class="flexprimary">
                        <p class="openvip">开通闲鱼号！</p>
                        <p class="tipinfo">就可以看到sei关注你啦</p>
                    </div>
                    <button class="on">开通</button>
            </div>
        </div>
        <div  class="head">
            <div class="welcome">
                <text style="font-size:20px;" >欢迎来到闲鱼</text>  
            </div>

            <button class="login" >马上登录</button>
            <div class="animate"></div>
        </div>
        <div class="list">
            <ul class="itemlist">
                <li class="item item1" >我发布的<span class="number" ></span></li>
                <li class="item item2">我卖出的<span class="number" ></span></li>
                <li class="item item3" >我买到的<span class="number" ></span></li>
                <li class="item item4">我赞过的<span class="number" ></span></li>
                <li class="item item5">我的拍卖</li>
                <li class="item item6">我的鱼贝<span class="number" ></span></li>
            </ul>
        </div>
        <div class="list" >
            <ul class="itemlist">
                <li class="item item8">我的公益</li>
                <li class="item item9">闲鱼Family</li>
                <li class="item item10">帮助与反馈</li>
            </ul>
        </div>
        <div class="list">
            <ul class="itemlist">
                <li class="item item7">设置</li>
            </ul>
        </div>
        <div class="buttonwrap">
            <button class="logout" >退出登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            url: ''
        }
    },
    mounted () {
       
        
    },
    methods: {
       
    }
}
</script>
<style lang="css" scoped>
body{
    background-color: white;
}
* {
    margin: 0;
    padding: 0;
}
ul,li {
    list-style: none;
}
.wrapper {
    width: 100%;
    min-height: 480px;
}
.buttonwrap {
    width: 100%;
    margin-bottom: 50px;
}
.logout {
    display: block;
    width: 95%;
    font-size: 15px;
    margin: 10px auto;
    height: 40px;
    outline: none;
    border: none;
    background-color: red;
    color: white;
    text-align: center;
}
.top{
    width: 100%;
    background-color: white;

}
.head {
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #fff;
}
.loginhead {
    width: 100%;
    height: 15px;
    background-color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
}
.open {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    margin-top: 120px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #ffda44;
}
.openvip {
    font-size: 20px;
    font-weight: 600;
}
.tipinfo {
    font-size: 13px;
}
.on{
    border: none;
    width: 70px;
    height: 26px;
    font-size: 11px;
    box-sizing: border-box;
    border: 1px solid #333;
    outline: none;
text-align: center;
    background-color: transparent;
}
.flex {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    flex-direction: row;
}
.border {
    border-bottom: 1px solid #f8f8d8;
    height: 80px;
}
.border:after {
    content: '';
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color:#999;
    border-style: solid;
    transform: rotate(45deg);
    position: absolute;
    right: 10px;
}
.flexprimary {
    flex:1;
}
.flexprimary .name p{
    font-size: 20px;
    font-weight: 900;
} 
.flexprimary .somedesc{
    font-size: 20px;
    color: #888;
}
.useravatar {
    width: 50px;
    height: 50px;
    background-color: #f9f9f9;
    border-radius: 50%;
    margin-right: 50px;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}
.useravatar img{
    width: 100%;
    border-radius: 50%;
}
.numbox {
    flex: 1;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
}
.num {
    color: #000;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 5px;
}
.numname {
    color: #888;
    font-size: 10px;
}
.block {
    height: 55px;   
}
.head .animate {
    position: absolute;
    bottom: 0;
    right: 30px;
    width: 40%;
    height: 100%;
    background:#fff url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/fish.png') no-repeat;
    background-position: 100% 100%;
}
.head .welcome {
    margin-left: 20px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
}
.head .login {
    margin-top: 10px;
    margin-left: 20px;
    font-size: 13px;
    width: 100px;
    height: 40px;
    text-align: center;
    background-color: #ffda44;
    outline: none;
    border: none;
}
.list {
    margin-top: 10px;
    width: 100%;    
    height: auto;
    background-color: #fff;
    font-size: 40px;  
}
.item {
    padding: 12px 35px;
    border: 1px solid #f8f8f8;
    box-sizing: border-box;
    position: relative;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 10px 10px;
}
.number {
    position: absolute;
    right: 30px;
    color: #888;
}
.item:last-child {
    border-bottom: none;
}
.item:after {
    content: '';
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 2px 2px 0 0;
    border-color:#999;
    border-style: solid;
    transform: rotate(45deg);
    position: absolute;
    right: 10px;
    top: 10px;
}
.item1 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/book.png')
}
.item2 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/发送.png')
}
.item3 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/我收到的.png')
}
.item4 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/收到评价.png')
}
.item5 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/拍卖.png')
}
.item6 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/撒鱼币.png')
}
.item7 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/设置.png')
}
.item8 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/爱心_.png')
}
.item9 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/闲鱼.png')
}
.item10 {
    background-image: url('https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/帮助.png')
}
</style>