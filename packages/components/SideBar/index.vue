<template>
    <div :class="bemCss()">
        <el-scrollbar wrapClass="scrollbar-wrapper">
            <el-menu mode="vertical"
            :background-color="backgroundColor"
            :text-color="textColor"
            :active-text-color="activeTextColor"
            :collapse="isCollapse"
            default-active="1"
            @open="handleOpen" @close="handleClose"
            :class="bemCss('el-menu-vertical-setting')"
            >
                <sidebar-item :menuData="menuData" :isCollapse="isCollapse"></sidebar-item>
            </el-menu>

        </el-scrollbar>
    </div>
</template>
<script>
    import create from "../../core/create";
    import SidebarItem from './SidebarItem'

    export default create({
        name: "side-bar",
        components: {
            SidebarItem
        },
        props: {
            backgroundColor: {
                type: String,
                default() {
                    return '#304156'
                }
            },
            textColor: {
                type: String,
                default() {
                    return '#fff'
                }
            },
            activeTextColor: {
                type: String,
                default() {
                    return '#ffd04b'
                }
            },
            isCollapse: {
                type: Boolean,
                default() {
                    return true
                }
            },
            menuData: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    })
</script>

<style lang="scss">
    $sideBarWidth: 210px;
    .hxvue-side-bar {
        &__el-menu-vertical-setting:not(.el-menu--collapse) {
            width: $sideBarWidth;
        }
        &__el-menu-vertical-setting {
            height: 100%;
        }
        .el-scrollbar {
            height: 100%;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
        }
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }

        .el-scrollbar__view {
            height: 100%;
        }
    }
    /*隐藏文字*/
    .el-menu--collapse .el-submenu>.el-submenu__title span{
        display: none;
    }
    /*隐藏 > */
    .el-menu--collapse .el-submenu>.el-submenu__title .el-submenu__icon-arrow{
        display: none;
    }
</style>
