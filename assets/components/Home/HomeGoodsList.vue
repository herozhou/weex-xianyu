   
<template>

    <div>
        
        <div class="mint-navbar">
            <div  :class="[{ is_selected: isLeftTab }, 'mint-tab-item'] " @click="select_tab_item('left')">
                            <div class="mint-tab-item-icon"></div>
                            <div class="mint-tab-item-label"><p >新鲜的</p></div>
            </div>
                
             <div  :class="[{ is_selected: !isLeftTab }, 'mint-tab-item'] " @click="select_tab_item('right')">
                            <div class="mint-tab-item-icon"></div>
                            <div class="mint-tab-item-label"><p >附近的</p></div>
             </div>
        </div>

        <div class="home-goods-list">
                <div class="home-goods-item" @click="jump">
                        <div class="home-goods-item-header" style="display:flex;flex-direction:row">
                            <image style="width: 30px;height: 30px;flex:1" src="https://sukura7.github.io/vue-xianyu-demo/static/1.png"></image>
                            <div style="flex:8">
                                <span>js123</span>
                                 <div style="display:flex;flex-direction:row">
                                    <image style="width: 20px;height: 20px;flex:1;" :src="img_base_64"></image>  
                                    <div style="flex:16"> <p>两分钟前来过</p> </div>
                                </div>
                            </div>
                            <span style="flex:1;color:red" >￥100</span>
                        </div>
                         <image style="width: 220px;height: 220px;" src="https://sukura7.github.io/vue-xianyu-demo/static/01.png"></image>
                         <text class="goods-fonts">小番茄定制2017新款显瘦竖条纹半生裙高腰纽扣开叉雪纺中长款半裙</text>
                        
                         <div class="home-goods-item-bottom">
                              <a href="https://sukura7.github.io/vue-xianyu-demo/index.html#/"> <text class="goods-fonts  goods-link">来自郑州</text></a>    <a href="https://sukura7.github.io/vue-xianyu-demo/index.html#/" > <text class="goods-fonts goods-link">鱼塘|网红衣服鱼塘</text></a> 
                         </div>
                        

                </div>

                <div class="home-goods-item">
                        <div class="home-goods-item-header" style="display:flex;flex-direction:row">
                            <image style="width: 30px;height: 30px;flex:1" src="https://sukura7.github.io/vue-xianyu-demo/static/2.png"></image>
                            <div style="flex:8">
                                <span>糖果xt90</span>
                                <div style="display:flex;flex-direction:row">
                                    <image style="width: 20px;height: 20px;flex:1;" :src="img_base_64"></image>  
                                    <div style="flex:16"> <p>一小时前来过</p> </div>
                                </div>
                            </div>
                            <span style="flex:1;color:red" >￥100</span>
                        </div>
                         <image style="width: 220px;height: 220px;" src="https://sukura7.github.io/vue-xianyu-demo/static/02.png"></image>

                         <text class="goods-fonts">买一送一：欧洲力淑女包，感兴趣的给我留言哟</text>
                       
                         <div class="home-goods-item-bottom">

                         <a href=""><text class="goods-fonts goods-link">来自郑州</text></a>    <a href=""><text class="goods-fonts goods-link">鱼塘|网红衣服鱼塘</text></a>

                         </div>

                </div>



        </div>

    </div>
    
</template>
<style scoped>
  .mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    flex-direction: row;
}
.mint-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1;
}
.mint-tab-item-label p{ 

    text-align: center;
}

.mint-tab-item-icon {
    width: 24px;
    margin: 0 auto 5px;
}
.mint-navbar .mint-tab-item {
    padding: 17px 0;
    font-size: 15px;
}
.mint-tab-item {
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;

}
.mint-navbar .mint-tab-item.is_selected {
    border-bottom: 3px solid #ffda44;
}
.mint-navbar .mint-tab-item.is_selected p{
    color: #ffda44;
}


.home-goods-item-header{
    display: flex;
    justify-content: space-between;
}
.home-goods-list{
    background: white;
}
.home-goods-item{
    margin-bottom: 10px;
   
}
.goods-fonts{
    font-size: 14px;
    font-weight: normal;
}
.goods-fonts.goods-link{
    color: #7dc5eb;
}
.home-goods-item-bottom{
     border-top-style:solid;
    border-top-width:1px;
    border-top-color:#f3f3f3;
    flex-direction: row;

}
.home-goods-item-bottom a{
    padding: 10px;
}

</style>
<script>
  
    export default {
      
        data () {
            return {
              isLeftTab:true,
              img_base_64:"data:image/png;base64,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",
            }
        },
        methods: {
              select_tab_item(_direction){
                if(_direction==='left'){
                        this.isLeftTab=true;
                }else if(_direction==='right'){
                        this.isLeftTab=false;

                }
            },
             jump(){
                this.$router.push('goodsdetail')
            }
        }
    }
</script>