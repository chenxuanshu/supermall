<template>
    <div class="list">
        <div class="item">
            <img src="~assets/img/profile/search_cart.svg" class="icon">
            <div class="info">我的购物车</div>
        </div>
        <div class="item">
            <img src="~assets/img/profile/connect.svg" class="icon">
            <div class="info">联系我们</div>
        </div>
    </div>
</template>




<script>

export default {
    name: 'listView'
}
</script>

<style scoped>
    .list {
        background-color: #fff;
        font-size: 15px;
        color: #333;
    }

    .list .item {
        height: 44px;
        line-height: 44px;
        position: relative;
    }
    .item img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 10px;
    }
    .item .info {
        margin-left: 35px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
        padding-left: 5px;
    }
    .item:last-of-type .info {
        border-bottom: none;

    }


</style>
