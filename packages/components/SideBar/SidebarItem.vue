<template>
    <div>
        <template v-for="item in menuData">
            <el-submenu v-if="item.node" :index="item.id">
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.menu_name}}</span>
                </template>
                <sidebar-item :menuData="item.node"></sidebar-item>
            </el-submenu>

            <el-menu-item v-else :index="item.id" :key="item.id">
                <i :class="item.icon"></i>
                <span slot="title">{{item.menu_name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'SidebarItem',
        props: {
            menuData: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>
