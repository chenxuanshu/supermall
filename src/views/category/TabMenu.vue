<template>
<scroll id="tab-menu">
    <div class="menu-list">
        <div class="menu-list-item" v-for="(item,index) in categories"
        :key="index" :class="{active: index == currentIndex}"
         @click="itemClick(index)">
            {{item.title}}
        </div>
    </div>
</scroll>
</template>

<script>
    import Scroll from 'components/common/scroll/Scroll.vue'

export default {
    name: 'tabMenu', 
    components: {Scroll},
    data(){return {
        currentIndex: 0
    }},
    props: {
        categories: {
            type: Array,
            default(){return []}
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            this.$emit('selectItem',index)
        }
    }
}
</script>

<style scoped="scoped">
    #tab-menu {
        background-color: #f6f6f6;
        height: 100%;
        width: 200px;
        box-sizing: border-box;
    }
    .menu-list-item {
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
    }
    
    .active {
        color: var(--color-tint);
        background-color: #fff;
        border-left: 3px solid var(--color-tint);
    }

</style>