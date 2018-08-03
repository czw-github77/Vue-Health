<template>
    <div id="login">
        <!-- 头部 -->
        <my-header fixed title='登录'>
            <a class="back-white" slot='left' @click='$router.go(-1)'></a>
        </my-header>
        <!-- 正文 -->
        <div class="content" :class="{isIOS: $store.state.device == 'ios'}">
            <div class="container">
                <div class="wrapper">
                    <div class="defaultImg">
                        <img src="~@/assets/icon/members.png">
                    </div>
                    <div class="defaultTip">
                        <span>请选择登录方式</span>
                    </div>
                    <ul class="loginList">
                        <!-- QQ登录 -->
                        <li class="list-item" @click.stop="login(0)">
                            <img src="~@/assets/icon/qqlogin.png">
                        </li>
                        <!-- 微信登录 -->
                        <li class="list-item" @click.stop="login(1)">
                            <img src="~@/assets/icon/wxlogin.png">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            GPSLocation: {}
        }
    },
    methods: {
        ...mapMutations([
            'set_userid'
        ]),
        ...mapMutations('login', [
            'set_isLogin'
        ]),
        ...mapMutations('user', [
            'set_userInfo'
        ]),
        ...mapActions('login', [
            'get_userPower_data'
        ]),
        // 第三方登录
        login(loginType) {
          this.$toast({ message: '测试', duration: 2000 })
        }
    }
}
</script>
<style lang='stylus'>
#login{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .wrapper{
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
    }
    .defaultImg {
        text-align: center;
        width: 100%;
        margin-bottom: 0.53rem;
        img {
            width: 2.4rem;
            height: 2.4rem;
        }
    }
    .defaultTip {
        margin: 0 auto;
        width: 50%;
        text-align: center;
        span{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            font-size: 0.32rem;
            color: darkgray;
            letter-spacing: 5px;
            height: 0.8rem;
            line-height: 0.8rem;
        }
        span:before{
            content: '';
            position: absolute;
            width: 25%;
            top: 50%;
            left: -50%;
            transform: translateY(-50%);
            border-top: 1px solid darkgray;
        }
        span:after{
            content: '';
            position: absolute;
            width: 25%;
            top: 50%;
            right: -50%;
            transform: translateY(-50%);
            border-top: 1px solid darkgray;
        }
    }
    .loginList{
        .list-item{
            margin-top: 0.4rem;
            text-align: center;
            img{
                width: 5.5rem;
                height: 1.28rem;
            }
        }
    }
}
</style>
