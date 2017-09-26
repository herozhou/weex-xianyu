<template>
    <div>
         <div class="login" :class="{'active':active}" v-show="login">
        <div class="head">
          <text class="h2">闲鱼赚钱指南</text>
          <div class="navbar">
                <div class="title-link">
                    <a href="">
                       <text class="titlename">卖什么更赚</text>
                       <text class="tip">教你卖什更赚钱</text>

                    </a>
                </div>

                 <div class="title-link">
                    <a href="">
                       <text class="titlename">拍照相机</text>
                       <text class="tip">看看家里的东西值多少钱</text>
                    </a>
                </div>


                 <div class="title-link">
                    <a href="">
                       <text class="titlename">淘宝一键转卖</text>
                       <text class="tip">剁手多了回回血</text>
                    </a>
                </div>
          </div>
        </div>
        <div class="content">
                    <div class="recomlist" >
                    <div class="recomlist-type" >

                      <text class="bar-ic iconfont">&#xe679;</text>
                      <text class="explain">卖闲置</text>

                      </div>
                    <div  class="recomlist-type">
                        
                      <text class="bar-ic iconfont">&#xe673;</text>

                      <text class="explain">出租房屋</text>
                    </div>
                    <div  class="recomlist-type ">
                      <text class="bar-ic iconfont">&#xe91e;</text>

                      <text class="explain">发布服务</text>
                    </div>
                </div>
                  <div class="footer">
                      <text class="bar-ic iconfont" @click="change3">&#xe91e;</text>
             
                     </div>
        </div>

      
    
      </div>
    <div class="wrapper">
        <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->

        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :style="testCS">&#xe665;</text>
            <text class="bar-txt">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic iconfont">&#xe679;</text>
            <text class="bar-txt">鱼塘</text>
        </div>
        <div class="bar-item act" @click="change1" >
          <div style="margin-top:-30px;margin-bottom:8px;">
            <text class="bar-ic iconfont" style="font-size:40px;color:#ffda44;">&#xe62b;</text>
            
          </div>
            <text class="bar-txt">添加</text>
        </div>
        

        <div class="bar-item" @click="tabTo('shop')">
            <text class="bar-ic iconfont" >&#xe69d;</text>

            <text class="bar-txt">消息</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont">&#xe759;</text>
            <text class="bar-txt">个人</text>
        </div>
    </div>
    </div>

</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt{
        font-size: 22px;
        padding-top: 2px;
    }
    .act{

    }

.content{
  height: 1000px;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f8f8f8;
  background: #fff;
  align-items: center;
}

    .login {
  display: none;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}




 .login .head {
  width: 100%;
}
 .login .head .h2 {
    margin-top: 150px;
  font-size: 40px;
  width: 100%;
  color: #000;
  box-sizing: border-box;
}
 .navbar {
  margin-top: 2rem;
  width: 100%;
 flex-direction: row;
}
.title-link{
    padding: 20px;
}

 .titlename {
  font-size: 30px;

  color: #000;
}
.titlename:after {
  content: '';
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #ffda44;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: relative;
  margin-left: .2rem;
}
 .tip {
    font-size: 20px;
    color:#888;
  }

   .innerbox {
  background-color: #fff;
  margin:  auto;
  position: relative;
}
 .innerbox .open {
  width: 5rem;
  height: 5rem;
  display: block;
  margin: .4rem auto;
  background: url('https://sukura7.github.io/vue-xianyu-demo/static/img/X.2e900c7.png') no-repeat;
  -webkit-background-size: 4rem 4rem;
  background-size: 4rem 4rem;
  position: absolute;
  top: -4rem;
  left: -1.5rem;
}
.recomlist{
    width: 100%;
    height: 600px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
.recomlist-type{
    flex-direction: column;
    flex: 1;
}
.explain{
    text-align: center;
}
.footer{
    height: 400px;
}
</style>
<script>

    var modal = weex.requireModule('modal');
    export default {
//        props: {
//            indexKey: {
//                type: String,
//                default: 'home'
//            },
//            reClick: {
//                type: Boolean,
//                default: false
//            },
//            items: {
//                type: Array,
//                default: function(){
//                    return [
//                        {
//                            icon:'&#xe660;',
//                            name:"首页",
//                            key:'home'
//                        }
//                    ]
//                }
//            }
//        },
        computed:{
            testCS:function () {
                return this.pIndexKey == 'home'?'color:#b4282d;':''
            }
        },
        data () {
            return {
                pIndexKey:'home',
                active: false,
                login:false,
            }
        },
        mounted(){
        },
        methods: {
            tabTo(_key){
                if(this.pIndexKey == _key) return;
                this.pIndexKey = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            },
             change1 () {
            const login = document.querySelector('.login');
            login.style.display = 'block';
            this.active = false
              },
               change3 () {
                    const login = document.querySelector('.login');
                    this.active = true
                      login.style.display = 'none';
                  },
        }
    }
</script>