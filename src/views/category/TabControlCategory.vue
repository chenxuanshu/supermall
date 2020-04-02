<template>
    <div>
        <gird-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
            <div class="item" v-for="(item,index) in subcategories.list" :key="index">
                <a :href="item.link">
                    <img :src="item.image" class="item-img" alt="">
                    <div class="item-text">{{item.title}}</div>
                </a>
            </div>
        </gird-view>
    </div>
</template>

<script>
    import GirdView from 'components/common/girdview/GirdView.vue'
export default {
    name: 'tabControlCategory',
    components: {GirdView},
    props: {
        subcategories: {
            type: Object,
            default(){return {}}
        }
    }
}
</script>

<style scoped>
    .item {
        text-align: center;
        font-size: 12px;
    }
    .item-img {
        widows: 80%;
    }
    .item-text {
        margin-top: 15px;
    }

</style>