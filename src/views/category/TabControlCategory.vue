<template>
    <div class="gird-wrapper">
        <gird-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
            <div class="item" v-for="(item,index) in subcategories.list" :key="index">
                <a :href="item.link">
                    <img :src="item.image" class="item-img" alt="" @load="imgLoad">
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
    },
    methods: {
        imgLoad(){
            this.$emit('imgLoad')
        }
    }
}
</script>

<style scoped>
.gird-wrapper {
    width: 310px;
}
    .item {
        text-align: center;
        font-size: 12px;
    }
    .item-img {
        width: 60%;
    }
    .item-text {
        margin-top: 15px;
    }

</style>