<template>
    <el-container class="home_container">
        <el-header>写点什么</el-header>
        <el-container>
            <template>
                <el-row class="tac" style="width:20%">
                    <el-col>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo" router>
                            <template v-for="(item,index) in this.$router.options.routes">
                                <template v-if="!item.hidden">
                                    <el-submenu :index="index.toString()" :key="index">
                                            <template slot="title">
                                                <i class="el-icon-location"></i>
                                                <span>{{item.name}}</span>
                                            </template>
                                        <el-menu-item-group v-for="(item_children,index) in item.children" :key="index">
                                            <el-menu-item :index="item_children.path">{{item_children.name}}</el-menu-item>
                                        </el-menu-item-group>
                                    </el-submenu>
                                </template>
                            </template>
                        </el-menu>
                    </el-col>
                </el-row>
            </template>
            <el-container>
                <el-main style="background-color: white">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        mounted() {
            window.console.log(this.$route.name);
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    .home_container {
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
    }
</style>