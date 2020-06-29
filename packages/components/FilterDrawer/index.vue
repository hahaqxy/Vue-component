<template>
    <div class="filter-drawer">
        <div class="filter_button"
             :style="{
             width: buttonWidth
             }"
              @click="handleClick"
        >
            筛选
        </div>
        <transition name="drawer-fade">
            <div
                    class="wrapper"
                    v-if="visible"
                    :style="{
          width: drawerWidth,
          height: drawerHeight,
          backgroundColor: backgroundColor
        }"
                    ref="drawer"
            >
                <slot :name="slotName"></slot>
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
                visible: false,
                slotName: "sort",
                drawerWidth: "265px",
                drawerHeight: "800px",
                backgroundColor: "#353838",
                buttonWidth: "180px"

            };
        },
        methods: {
            handleClick: function () {
                this.visible = ! this.visible;
                this.buttonWidth = this.buttonWidth === "180px" ? "265px" : "180px";
            }
        }
    })
</script>

<style scoped lang="scss">
    $time: 0.5s;
    $fontColor: #fff;
    @mixin positionInfo(
        $top: 0%,
        $left: 0%,
        $width: 100%,
        $height: 100%,
        $isWidthAndHeight: true
    ) {
        position: fixed;
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

    .filter-drawer {
        color: $fontColor;

        .filter_button {
            position: fixed;
            top: 0;
            left: 0;
            height: 70px;
            background-color: #353838;
            font-size: 20px;
            padding: 21px 40px 0px 60px;
            border-bottom: 1px solid #0c0d0d;
            text-align: left;
            white-space: nowrap;
            box-sizing: border-box;
            transition: width $time ease-in-out;
        }

        .wrapper {
            @include positionInfo(70px, 0%, 0%, 100%);
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