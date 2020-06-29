<template>
    <div class="data-card">
        <el-row :span="24">
            <el-col
                    :xs="24"
                    :sm="12"
                    :md="span"
                    v-for="(item, index) in data"
                    :key="index"
            >
                <div class="item">
                    <a
                            :href="item.href ? item.href : 'javascript:void(0);'"
                            @click="item.click ? item.click(item) : ''"
                            :target="item.target"
                    >
                        <img class="item-img" :src="item.src" />
                        <div class="item-text" :style="{ backgroundColor: bgText }">
                            <h3 :style="{ color: colorText }">{{ item.name }}</h3>
                            <p :style="{ color: colorText }">{{ item.text }}</p>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import create from "../../core/create";

    export default create({
        name: "data-card",
        data: function() {
            return {};
        },
        props: {
            option: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            span: function() {
                return this.option.span || 6;
            },
            data: function() {
                return this.option.data || [];
            },
            bgText: function() {
                return this.option.bgText || "#2e323f";
            },
            colorText: function() {
                return this.option.colorText || "#fff";
            }
        },
        created() {},
        mounted() {},
        watch: {},
        methods: {}
    });
</script>

<style scoped lang="scss">
    .data-card {
        $height: 340px;
    .item {
        position: relative;
        margin: 0 auto;
        margin-bottom: 50px;
        width: 230px;
        height: $height;
        overflow: hidden;
        border-radius: 5px;
        border-color: #fff;
        border-width: 1px;
        border-style: solid;
    &:hover .item-text {
         top: 0;
     }
    }
    .item-img {
        width: 100%;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .item-text {
        position: absolute;
        top: 150px;
        padding: 20px 15px;
        width: 100%;
        height: $height;
        overflow: auto;
        box-sizing: border-box;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        opacity: 0.9;
        transition: top 0.4s;
    &>p {
         font-size: 16px;
         line-height: 25px;
         text-indent: 2em;
     }
    }
    }
</style>
