<template>
    <div :class="bemCss()">
        <div :class="bemCss('filter_button')"
             :style="{ width: visible ? '265px' : buttonWidth }"
              @click="handleClick"
        >
            筛选
        </div>
        <transition name="drawer-fade">
            <div
                    :class="bemCss('wrapper')"
                    v-if="visible"
                    :style="{
          width: drawerWidth,
          height: drawerHeight,
          backgroundColor: backgroundColor
        }"
            >
                <slot name="sort"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import create from "../../core/create";

    export default create({
        name: "filter-drawer",
        data() {
            return {
                visible: false
            };
        },
        props: {
            option: {
                type: Object,
                default: () => {
                    return {};
                }
            }
        },
        computed: {
            drawerWidth: function() {
                return this.option.drawerWidth || "20%";
            },
            drawerHeight: function() {
                return this.option.drawerHeight || "15%";
            },
            backgroundColor: function() {
                return this.option.backgroundColor || "#000";
            },
            buttonWidth: function() {
                return this.option.buttonWidth || "15%";
            }
        },
        methods: {
            handleClick: function () {
                this.visible = ! this.visible;
            }
        }
    })
</script>

<style scoped lang="scss">
    $time: 0.2s;
    $fontColor: #fff;
    @mixin positionInfo(
        $top: 0,
        $left: 0,
        $width: 100%,
        $height: 100%,
        $isWidthAndHeight: true
    ) {
        position: absolute;
        top: $top;
        left: $left;
        z-index: 1000;
        @if $isWidthAndHeight {
            width: $width;
            height: $height;
        }
    }
    @mixin transform($from, $to) {
        from {
            transform: translateX($from);
        }
        to {
            transform: translateX($to);
        }
    }

    .hxvue-filter-drawer {
        height: 980px;
        color: $fontColor;
        position: relative;

        &__filter_button {
            @include positionInfo(0, 0, 100%, 70px);
            background-color: #353838;
            font-size: 20px;
            border-bottom: 1px solid #0c0d0d;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            transition: width $time ease-in-out;
        }

        &__wrapper {
            @include positionInfo(71px, 0, 0%, 100%);
            padding: 30px 20px 20px 40px;
            box-sizing: border-box;
        }
    }

    @keyframes drawer-fade-in {
        @include transform(-100%, 0);
    }
    .drawer-fade-enter-active {
        animation: drawer-fade-in $time;
    }
    @keyframes drawer-fade-out {
        @include transform(0, -100%);
    }
    .drawer-fade-leave-active {
        animation: drawer-fade-out $time;
    }

</style>
