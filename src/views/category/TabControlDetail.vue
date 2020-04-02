<template>
    <gird-view>
        <goods-list-item v-for="(item,index) in categoryDetail" :key="index" :godos="item">
        </goods-list-item>
    </gird-view>
</template>

<script>
    import GirdView from 'components/common/girdview/GirdView.vue'
    import GoodsListItem from 'components/content/goodsList/GoodsListItem.vue'

export default {
    name: 'TabControlDetail',
    components: {GirdView,GoodsListItem},
    props: {
        categoryDetail: {
            type: Array,
            default(){return []}
        }
    }
}
</script>


<style scoped>

</style>