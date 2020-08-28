<template>
    <div class="logo" :class="classObj">
        <transition name="fade">
      <span v-if="isCollapse" class="logo_subtitle" key="0">
        {{logo}}
      </span>
        </transition>
        <transition-group name="fade">
            <template v-if="!isCollapse">
                <span class="logo_title" key="1">{{indexTitle}} </span>
            </template>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: "logo",
        props: {
            option: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        computed: {
            logo() {
                return this.option.logo || "A";
            },
            indexTitle() {
                return this.option.indexTitle || '后台快速开发模版';
            },
            isCollapse() {
                return this.option.isCollapse || false;
            },
            classObj() {
                return {
                    show_logo_subtitle: this.isCollapse
                }
            }
        }
    }
</script>

<style lang="scss">
    .fade-leave-active {
        transition: opacity 0.2s;
    }

    .fade-enter-active {
        transition: opacity 2.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .logo {
        position: fixed;
        top: 0;
        left: 0;
        /*top: 10px;*/
        /*left: 10px;*/
        width: 200px;
        height: 64px;
        line-height: 64px;
        background-color: #304156;
        font-size: 20px;
        overflow: hidden;
        box-sizing: border-box;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        color: rgba(255, 255, 255, 0.8);
        z-index: 1024;
        transition: width 0.3s;

        &.show_logo_subtitle {
            width: 64px;
        }

        &_title {
            display: block;
            text-align: center;
            font-weight: 300;
            font-size: 20px;
        }

        &_subtitle {
            display: block;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
        }
    }
</style>
