<template>
    <div class="wrapper">
        <home-header></home-header>
        <!-- <top-channel></top-channel> -->
        <scroller class="main-list" offset-accuracy="300px">
            <refresher @loadingDown="loadingDown"></refresher>
            <div class="cell-button" @click="jumpWeb('https://www.baidu.com')">
                <yx-slider :imageList="YXBanners" ></yx-slider>
                <div class="slogan">
                <banner-goods-box hasMore=false newGoods=false  :goods="xianyu_banner_goods"></banner-goods-box>

                </div>
            </div>
            <div class="cell-button">
                <home-classify  :items="block1.items" ></home-classify>
            </div>
            <div  @click="jumpWeb('https://www.baidu.com')">
                <yx-slider :imageList="YXBanners" ></yx-slider>
                <div class="slogan">

                </div>
            </div>
            <div >
               
                    <home-goods-list></home-goods-list>
            </div>

            <div class="cell-button">
                <home-bottom-scroller hasMore=true  :goods="home_bottom_slider_goods"></home-bottom-scroller>
            </div>
            <div class="cell-button">
                <block-2 hasMore=true hotGoods=true :head="head2" :goods="goods2"></block-2>
            </div>
            <div class="cell-button">
                <block-3 :goods="goods3"></block-3>
            </div>
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
    }
    .main-list{
        position: fixed;
        top: 108px;
        bottom: 90px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }

    .cell-button{
        padding-bottom: 18px;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66px;
        font-size: 26px;
        padding-top: 16px;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }
  
</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    import util from '../../src/assets/util';
    import Header from '../components/Header.vue';
    import refresher from '../components/refresh.vue';
    import topChannel from '../components/topChannel.vue';
    import YXSlider from '../components/YXSlider.vue';
    import Block1 from '../components/Block1.vue';
    import Block2 from '../components/Block2.vue';
    import Block3 from '../components/Block3.vue';
    import BannerGoodsBox from '../components/Home/BannerGoodsBox.vue';
    import HomeClassify from '../components/Home/HomeClassify.vue';
    import HomeGoodsList from '../components/Home/HomeGoodsList.vue';
    import HomeBottomScroller from '../components/Home/HomeBottomScroller.vue';


    export default {
        components: {
            'home-header': Header,
            'refresher': refresher,
            'top-channel': topChannel,
            'yx-slider': YXSlider,
            'block-1': Block1,
            'block-2': Block2,
            'block-3': Block3,
            'banner-goods-box' :BannerGoodsBox,
            'home-classify' : HomeClassify,
            'home-goods-list' : HomeGoodsList,

            'home-bottom-scroller' : HomeBottomScroller,

        },
        data () {
            return {
            
                YXBanners: [
                    // { title: '', src: 'http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg'},
                    // { title: '', src: 'http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg'},
                    // { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg'},
                    // { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg'},
                    // { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg'},
                    // { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-5.jpg'},
                    // { title: '', src: 'http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg'}
                    { title: '', src: './static/banner1.jpg'},
                    { title: '', src: './static/banner2.jpg'},
                    { title: '', src: './static/banner3.jpg'},

                ],
                block1: {
                    title:'品牌制造商直供',
                    items: [
                        {
                            name: "奢侈品",
                            price: "1895个宝贝入塘",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
                        },
                        {
                            name: "法院卖货",
                            price: "手机数码真心便宜",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
                        },
                        {
                            name: "电脑发烧友",
                            price: "262个宝贝新入塘",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
                        },
                        {
                            name: "距离开始9小时",
                            price: "蔡氏古琴制作工艺",
                            bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
                        },
                         {
                            name: "【技能】会摄影",
                            price: "爱宠的写真，约吗",
                            state: "上新",
                            bg: "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
                        },
                        {
                            name: "实拍穿搭",
                            price: "今日实拍已上新",
                            bg: "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
                            url:"http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
                        }
                    ]
                },
                head1:{
                    tlt:'周一周四 · 新品发布',
                    tltBg:'http://doc.zwwill.com/yanxuan/imgs/bg-new.png',
                    url:'http://m.you.163.com/item/newItem'
                },
                xianyu_banner_goods:[
                    { tlt:"咸鱼精选",img:"./static/phone.png",info:"这里有好东西",},
                    { tlt:"拍卖",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"变形金刚5"},
                    { tlt:"同城",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"选闲置更靠谱"},
                    { tlt:"我要租房",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"三分钟租到房"},
                ],
                  home_bottom_slider_goods:[
                    { tlt:"宇宙中心五道口鱼塘", info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我1',
                        img1:"https://sukura7.github.io/vue-xianyu-demo/static/img1.png",
                        img2:"https://sukura7.github.io/vue-xianyu-demo/static/img2.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img3.png",

                       distance:"291"},
                    { tlt:"中关村鱼塘",info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我2',

                       img1:"https://sukura7.github.io/vue-xianyu-demo/static/img4.png",
                        img2:"https://sukura7.github.io/vue-xianyu-demo/static/img5.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img6.png",

                        distance:"79"},
                    { tlt:"三里屯鱼塘",info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我3',

                       img1:"https://sukura7.github.io/vue-xianyu-demo/static/img7.png",
                        img2:"https://sukura7.github.io/vue-xianyu-demo/static/img8.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img9.png",

                        distance:"334"},
                    { tlt:"海淀区鱼塘",info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我4',
                       img1:"https://sukura7.github.io/vue-xianyu-demo/static/img1.png",
                        img2:"https://sukura7.github.io/vue-xianyu-demo/static/img2.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img3.png",
                        distance:"289"},
                    { tlt:"朝阳区鱼塘",info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我5',
                        img1:"https://sukura7.github.io/vue-xianyu-demo/static/img4.png",
                           img2:"https://sukura7.github.io/vue-xianyu-demo/static/img5.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img6.png",
                        distance:"119"},
                    { tlt:"昌平区鱼塘",info:"发布数91 昨日人气+16",notice:'想要宝贝置顶的可以私聊我6',
                            img1:"https://sukura7.github.io/vue-xianyu-demo/static/img7.png",
                           img2:"https://sukura7.github.io/vue-xianyu-demo/static/img8.png",
                        img3:"https://sukura7.github.io/vue-xianyu-demo/static/img9.png",
                        distance:"299"},
                ],
                goods1:[
                    { tlt:"日式和风声波式电动牙刷",img:"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",info:"进口刷毛，专利技术",price:"119"},
                    { tlt:"小馒头 多色双肩包",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"奶油色泽，小巧减龄",price:"79"},
                    { tlt:"多功能商务双肩包",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"17个功能分区，内置分层收纳",price:"334"},
                    { tlt:"切尔西牛皮女靴",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"经典牛皮切尔西，时尚帅气",price:"289"},
                    { tlt:"清心花茶壶套装",img:"http://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330",info:"明亮通透，滤茶迅速",price:"119"},
                    { tlt:"全棉色织磨毛四件套",img:"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",info:"优雅色织，温暖磨毛",price:"299"},
                    { tlt:"黑凤梨 20寸PC膜拉链登机箱",img:"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",info:"热卖9万只，网易人手1只",price:"185"},
                    { tlt:"日式和风敞口保温杯",img:"http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",info:"真空隔热，保温保冷",price:"32"}
                ],
                head2:{
                    tlt:'人气推荐 · 好物精选',
                    tltBg:'http://doc.zwwill.com/yanxuan/imgs/bg-hot.png',
                    url:'http://m.you.163.com/item/recommend'
                },
                goods2:[
                    { tlt:"牛皮复古双肩背包",img:"http://yanxuan.nosdn.127.net/6fe7a267fee8eb288cc28d67d5d9f57c.png?imageView&quality=85&thumbnail=330x330",info:"复古全牛皮，体验品质格调",price:"479"},
                    { tlt:"双宫茧桑蚕丝被 空调被",img:"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",info:"一级桑蚕丝，吸湿透气柔软",price:"479"},
                    { tlt:"清新两用杯",img:"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",info:"办公杯优选 轻松饮茶",price:"52"},
                    { tlt:"日式蓬软太鼓抱枕",img:"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",info:"萌趣太鼓造型 软糯轻柔回弹",price:"29"},
                    { tlt:"怀抱休闲椅组合（皮款）",img:"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",info:"葛优躺神器皮款",price:"3999"},
                    { tlt:"欧式哑光餐具套装",img:"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",info:"德化白瓷，坚实耐用",price:"189"},
                    { tlt:"可水洗抗菌防螨丝羽绒枕",img:"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",info:"进口防螨布，热销50万件",price:"99"},
                    { tlt:"两带式男/女款拖鞋",img:"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",info:"鞋杯随脚型而变，舒适呵护",price:"69.9"}
                ],
                goods3:[
                    { tlt:"日式和风敞口保温杯",img:"http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",info:"真空隔热，保温保冷",price:"32"},
                    { tlt:"切尔西牛皮女靴",img:"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",info:"经典牛皮切尔西，时尚帅气",price:"289"},
                    { tlt:"小馒头 多色双肩包",img:"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",info:"奶油色泽，小巧减龄",price:"79"},
                    { tlt:"全棉色织磨毛四件套",img:"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",info:"优雅色织，温暖磨毛",price:"299"},
                    { tlt:"日式和风声波式电动牙刷",img:"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",info:"进口刷毛，专利技术",price:"119"},
                    { tlt:"多功能商务双肩包",img:"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",info:"17个功能分区，内置分层收纳",price:"334"},
                    { tlt:"黑凤梨 20寸PC膜拉链登机箱",img:"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",info:"热卖9万只，网易人手1只",price:"185"},
                    { tlt:"日式蓬软太鼓抱枕",img:"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",info:"萌趣太鼓造型 软糯轻柔回弹",price:"29"},
                    { tlt:"可水洗抗菌防螨丝羽绒枕",img:"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",info:"进口防螨布，热销50万件",price:"99"},
                    { tlt:"双宫茧桑蚕丝被 空调被",img:"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",info:"一级桑蚕丝，吸湿透气柔软",price:"479"},
                    { tlt:"怀抱休闲椅组合（皮款）",img:"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",info:"葛优躺神器皮款",price:"3999"},
                    { tlt:"欧式哑光餐具套装",img:"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",info:"德化白瓷，坚实耐用",price:"189"},
                    { tlt:"清新两用杯",img:"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",info:"办公杯优选 轻松饮茶",price:"52"},
                    { tlt:"两带式男/女款拖鞋",img:"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",info:"鞋杯随脚型而变，舒适呵护",price:"69.9"}
                ],
                showLoading: 'hide'
            }
        },

        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/web.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            onloading () {
                modal.toast({ message: 'loading', duration: 0.3 })
                this.showLoading = 'show';
                setTimeout(() => {
                    this.goods3.push(...this.goods1);
                    this.showLoading = 'hide'
                }, 600)
            },
            loadingDown(){
                this.goods3 =[];
                this.goods3.push(...this.goods2);
                this.goods3.push(...this.goods1);
            },
            select_tab_item(_direction){
                if(_direction==='left'){
                        this.isLeftTab=true;
                }else if(_direction==='right'){
                        this.isLeftTab=false;

                }
            }
        }
    }
</script>