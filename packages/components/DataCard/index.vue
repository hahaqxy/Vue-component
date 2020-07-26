<template>
    <div :class="bemCss()" :style="{ width: setPx(pageWidth) }">
        <el-row :gutter="gutter">
            <el-col
                    :class="computedClass"
                    :xl="cardSpan"
                    :lg="6"
                    :md="8"
                    :xs="12"
                    v-for="(item, index) in data"
                    :key="index"
            >
                <div :class="bemCss('item')" :style="{ marginBottom: setPx(gutter) }">
                    <a
                            :href="item.href ? item.href : 'javascript:void(0);'"
                            :target="item.target"
                            @click="handleClick(item, index)"
                    >
                        <div :style="{ height: setPx(imgHeight) }">
                            <img
                                    :class="bemCss('itemImg')"
                                    :src="item.src"
                                    width="100%"
                                    :height="setPx(imgHeight)"
                                    :object-fit="fitModel"
                            />
                        </div>
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
                gutter: this.option.gutter || 6,
                cardSpan: this.option.cardSpan || 4,
                imgHeight: this.option.imgHeight || 340,
                fitModel: this.option.fitModel || "fill"
            };
        },
        props: {
            option: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            computedClass() {
                return { "el-col-4-8": 5 === this.option.cardSpan };
            },
            pageWidth() {
                return this.option.pageWidth || "80%";
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
        methods: {
            handleClick(item, index) {
                this.$emit('card-click', item, index);
            }
        }
    });
</script>

<style scoped lang="scss">
    .el-col-4-8 {
        width: 20%;
    }
    .hxvue-data-card {
        margin: 0 auto;
        &__item {
            position: relative;
            overflow: hidden;
            border: 1px solid #fff;
            border-radius: 5px;
            &:hover .hxvue-data-card__itemText {
             top: 0;
             bottom: 0;
            }
        }
        &__itemText {
            position: absolute;
            top: 60%;
            padding: 20px 15px;
            box-sizing: border-box;
            opacity: 0.7;
            transition: top 0.4s;
            p {
             font-size: 16px;
             line-height: 25px;
             text-indent: 2em;
            }
        }
    }
</style>
