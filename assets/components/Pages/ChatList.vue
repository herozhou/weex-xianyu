<template>
<div>
<div class="chatlist" :class="showBox=0?'listbottom':'popbox'">
    <ul>
        <div v-for="item in talks">
            <li class="user" v-if="item.type==1">
                <div class="chat-user">   <image style="width: 45px;height: 45px;" src="https://sukura7.github.io/vue-xianyu-demo/static/avatar.jpg" class="avatar"></image> </div>

                 <text class="time"><i>{{item.time}}</i>{{name}}</text>
                <div class="text" v-html="replaceEmoj(item.content)"></div>
            </li>
            <li v-if="item.type==2" class="saler">
                <div class="chat-user">  <image style="width: 45px;height: 45px;" src="https://sukura7.github.io/vue-xianyu-demo/static/avatar.jpg" class="avatar"></image></div>
                <text class="time">马化云<i>{{item.time}}</i></text>
                <div class="text" v-html="replaceEmoj(item.content)"></div>
            </li>
        </div>
    </ul>
</div>
<div class="block"></div>
<div class="foot">
    <div class="inputbox">
        <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E5%25BD%2595%25E9%259F%25B3.png"  class="speaks"></image>
        <input id="msg" @keypress.enter="sendMsg" type="text"placeholder="想对Ta说点什么" class="input"  v-model="content"></input>
 <image style="width: 30px;height: 30px;" src="https://coding.net/u/herozhou/p/weexassets/git/raw/master/images/%25E7%25AC%2591%25E8%2584%25B8.png" class="emoj" v-on:click="showBox=showBox==1?0:1"></image>
       
        <text  class="send" v-on:click="sendMsg">发送</text>
    </div>

</div>

</div>
</template>
<script>
export default {
    props: {
        news: {
            type: Object
        }
    },
    data() {
        return {
            showBox: 0, //0隐藏emoji 1显示emoji
            content:'',
            name: '马化云',
            url: '',
            //聊天对话
            talks: [{
                type: 1,
                time: "2017.9.28",
                content: 'Hello~'
            }, {
                type: 2,
                time: "2017.9.28",
                content: '亲按回车就能一键回复哟~'
            }],
            // 表情
            EXPS: [
                { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
                { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
                { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
                { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
                { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
                { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
                { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
                { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
                { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
                { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
                { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
                { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
                { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
                { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
                { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
                { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
                { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
                { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
                { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
                { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
                { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
                { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
                { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
                { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
                { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
                { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
                { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
            ]
        }
    },
    mounted () {
        // let username = window.localStorage.getItem('username')
        // console.log(window.localStorage.getItem('useravatar'))
        // this.url = window.localStorage.getItem('useravatar')
        // console.log(this.url)
        // this.$store.dispatch('setUsername', username)
        // this.talks[0].name = this.$store.state.mutation.username
        // this.talks[1].name=this.news.name
        // this.name = username
        // console.log(this.name)
        // this.scrollToBottom();
        // this.inputFocus();    
    },
    methods: {
        getEXP (pageCurrent,pageSize) {
            return this.EXPS.slice((pageCurrent - 1) * pageSize, pageSize * pageCurrent)
        },
        //发送消息
        sendMsg () {
            var vm = this;
            if(this.content==''){
                return;
            }
            vm.talks.push({
                type: 1,
                time: "2017.9.28",
                content: this.content
            });
            setTimeout(function(){
                vm.talks.push({
                    type: 2,
                    time:"2017.9.28",
                    content: '你好！'
                });
            },100);
            // 清空文本框
            this.content='';
            // 当消息列表达到一定的高度
            this.scrollToBottom();  
            // this.changeBtn() 
        },
        //聚焦输入框
        inputFocus () {
            document.querySelector(".input").focus();
        },
        //监听输入框是否有值
        // changeBtn () {
        //     let content = this.replaceEmoj(this.content)
        //     if(content){
        //         this.show = false
        //     }else{
        //         this.show = true
        //     }
        // },
        //滚动条滚动到底部
        scrollToBottom () {
            setTimeout(function(){
                var chatlists = document.querySelectorAll('.chatlist')
                var chatlist = chatlists[0]
                chatlist.scrollTop=chatlist.scrollHeight
            },100)
        },
        //替换表情代码
        replaceEmoj (content) {
            var exps=this.EXPS;
            for(var i=0;i<exps.length;i++){
                content = content.replace(exps[i].reg, '<img src="static/emotion/' + exps[i].file +'"  alt="" />');
            }
            return content;
        }
    }
}
</script>
<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}
.chatlist {
    z-index: -99;
    margin-top: 160px;
    position: absolute;
    top: 5px;
    bottom: 45px;
    left: 0;
    right: 0;
    min-height:300px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:5px 0;
    box-sizing: border-box;
    background-color:#f7f7f7;
    height: 500px;
    margin-bottom: 100px;
}
.listbottom {
    bottom: 45px;
}
.popbox {
    bottom: 5px;
}
.chatlist ul {
    min-height: 5px;
}
.chatlist ul li {
    position: relative;
    margin-bottom: 5px;
    padding-left:65px;
    min-height: 65px;
    box-sizing: border-box;
}

/* 用户列表样式*/
.chatlist ul .user {
    text-align: right;
    padding-left: 0;
    padding-right:60px;
    box-sizing: border-box;
}
.user .chat-user {
    left: auto;
    right: 5px;
}
.user .text {
    margin-left: 0;
    text-align: left;
    background-color: #ffda44;
    color: #fff;
}
.user .text:after {
    left: auto;
    right: -6px;
    border-top-color: #ffda44;
}

/*客服列表样式*/
.chat-user {
    position: absolute;
    left: 5px;
}
.text,
.chat-user {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
}
.chat-user img {
    width:5px;
    height:5px;
    border-radius: 100%;
}
.time {
    width: 100%;
    text-align: right;

}

.time span i {
    font-style: normal;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 15px;
}
.text {
    line-height:10px;
    padding:10px 15px;
    background-color: #fff;
    border-radius: 3px;
    color: #333;
    word-break: break-all;
    max-width: 465px;
}
/*表情图片样式*/
.text img {
    max-width: 100%;
    vertical-align: middle;
}
/*三角形*/
.text:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    
    border-width:10px;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    overflow: hidden;  
}
/* 底部输入框样式 */
.foot {
    width: 100%;
    min-height: 45px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #ffffff;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #f6f6f6;
    padding: 0 15px;
    box-sizing: border-box;
}
.foot .emoji {
    width: 100%;
    height: 5px;
}
.block{
    height: 50px;
}
.inputbox {
    height: 15px;
    width: 100%;
    align-items: center;
    flex-direction: row;
}
.speaks,.emoj,.add{
    width:5px;
    display: block;
    text-align: center;
}
.input{
    flex: 1;
    border: none;
    outline: none;
}
.input::-webkit-input-placeholder{
    font-size: 15px;
}
.speaks img,
.emoj img,
.add img{
    width:5px;
    height:5px;
}
.show {
    display: block;
}
.hide {
    display: none;
}
.emojs {
    overflow: hidden;
    width: 5px;
    margin: 0px auto;
    height: 135px;
}
.emojs li {
    width:5px;
    float: left;
    padding: 5px 0 5px;
}
.send {
    width:50px;
    height:30px;
    background-color: #ffda44;
    color: #000;
    font-weight: 600;
    text-align: center;
    line-height:30px;
    font-size: 15px
} 
.saler{
       text-align: left;
    
    box-sizing: border-box;
}  
.saler .time{
    text-align: left;
}
.saler .text:after{
    left: -9px;
}
</style>