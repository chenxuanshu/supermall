<template>
    <div class="gird-view" ref="girdView">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'girdView',
    props: {
        cols: {
            type: Number,
            default: 2
        },
        hMargin: {
            type: Number,
            default: 8
        },
        vMargin: {
            type: Number,
            default: 8
        },
        itemSpace: {
            type: Number,
            default: 8
        },
        lineSpace: {
            type: Number,
            default: 8
        }
    },
    methods:{
        _autoLayout(){
            let girdEl = this.$refs.girdView
            let children = girdEl.children
            girdEl.style.padding = `${this.vMargin}px ${this.hMargin}px`

            let itemWidth = (girdEl.clientWidth - 2 * this.hMargin - (this.cols -1) * this.itemSpace) / this.cols
            for (let i =0; i<children.length; i++){
                let item = children[i]
                item.style.width = itemWidth + 'px'
                if ((i + 1) % this.cols !== 0) {
                    item.style.width = itemWidth + 'px'
                }
                if (i >= this.cols) {
                    item.style.marginTop = this.lineSpace + 'px'
                }
            }
        }
    },
    mounted(){
        setTimeout(this._autoLayout,20)
    },
    updated(){
        this._autoLayout()
    }
}
</script>

<style scoped>
    .gird-view {
        display: flex;
        flex-wrap: wrap;
    }
</style>