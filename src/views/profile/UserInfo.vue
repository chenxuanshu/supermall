<template>
    <div class="user-info">
        <slot name="user-icon">
            <img class="private-img" src="~assets/img/profile/user.svg">
        </slot>
        <div class="login-info">
            <slot name="user-nickname">
                <div class="login-info-top">登录/注册</div>
            </slot>
            <div class="phone">
                <span><img class="icon-mobile" src="~assets/img/profile/phone.svg"></span>
                <slot name="user-phone">
                    暂无绑定手机号
                </slot>
            </div>
        </div>
        <img class="arrow-img" src="~assets/img/profile/arrow_right.svg">
    </div>
</template>

<script>
export default {
    name: 'userInfo'
}
</script>


<style scoped>
    .user-info {
        background-color: var(--color-tint);
        padding: 15px;
        display: flex;
        position: relative;
        border-top: 2px solid white;
    }

     .user-info .private-img {
        width: 60px;
        height: 60px;
        background-color: rgb(202, 205, 204);
        border-radius: 30px;
        margin-right: 5px;
    }

    .icon-mobile {
        width: 16px;
        height: 16px;
        margin-right: 3px;
    }

    .arrow-img {
        width: 40px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto 20px;
    }

    .user-info .login-info {
        font-size: 18px;
        color: white;
    }

    .user-info .login-info .phone {
        display: flex;
        font-size: 14px;
    }

    .login-info-top {
        padding: 10px 0;
    }
   
</style>