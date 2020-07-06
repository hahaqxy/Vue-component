<template>
    <div :class="bemCss()">
        <el-row :span="24">
            <el-col
                    :xs="24"
                    :sm="12"
                    :md="span"
                    v-for="(item, index) in data"
                    :key="index"
            >
                <div :class="bemCss('item')">
                    <a
                            :href="item.href ? item.href : 'javascript:void(0);'"
                            :target="item.target"
                            @click="itemClick ? itemClick(item, index) : ''"
                    >
                        <img :class="bemCss('itemImg')" :src="item.src" />
                        <div :class="bemCss('itemText')" :style="{ backgroundColor: bgText, color: colorText }">
                            <h3>{{ item.name }}</h3>
                            <p>{{ item.text }}</p>
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
            return {
                itemClick: this.option.itemClick
            };
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
        }
    });
</script>

<style scoped lang="scss">
    $height: 340px;
    .hxvue-data-card {
        &__item {
            position: relative;
            margin: 0 auto;
            margin-bottom: 50px;
            width: 230px;
            height: $height;
            overflow: hidden;
            border: 1px solid #fff;
            border-radius: 5px;
            &:hover .hxvue-data-card__itemText {
             top: 0;
         }
        }
        &__itemImg {
            width: 100%;
            border-radius: 5px 5px 0 0;
        }
        &__itemText {
            position: absolute;
            top: 150px;
            padding: 20px 15px;
            width: 100%;
            height: $height;
            overflow: auto;
            box-sizing: border-box;
            border-radius: 0 0 5px 5px;
            opacity: 0.9;
            transition: top 0.4s;
            p {
             font-size: 16px;
             line-height: 25px;
             text-indent: 2em;
         }
        }
    }
</style>
