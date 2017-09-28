/**
 */
import Router from 'vue-router'
import ViewHome from '../assets/views/home.vue'
import ViewTopic from '../assets/views/topic.vue'
import ViewClass from '../assets/views/class.vue'
import ViewShop from '../assets/views/shop.vue'
import ViewMy from '../assets/views/my.vue'

import GoodsDetail from '../assets/components/Pages/GoodsDetail.vue'

import Chat from '../assets/components/Pages/Chat.vue'
import ChatList from '../assets/components/Pages/ChatList.vue'

import Pay from '../assets/components/Pages/Pay.vue'
import Addr from '../assets/components/Pages/Addr.vue'
import Category from '../assets/components/Pages/Category.vue'

import MyPublish from '../assets/components/My/MyPublish.vue'

Vue.use(Router)


export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/home', component: ViewHome },
        { path: '/topic', component: ViewTopic },
        { path: '/class', component: ViewClass },
        { path: '/shop', component: ViewShop },
        { path: '/my', component: ViewMy },
        { path: '/goodsdetail', component: GoodsDetail },
        { path: '/chat', component: Chat },
        { path: '/pay', component: Pay },
        { path: '/addr', component: Addr },
        { path: '/chatlist', component: ChatList },
        { path: '/category', component: Category },
        { path: '/mypublish', component: MyPublish },

        

        { path: '/', redirect: '/home' }
    ]
})