<template>
    <el-container>
        <el-header>写点什么</el-header>
        <el-container>
            <template>
                <el-row class="tac" style="width:20%">
                    <el-col>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose" router="true">
                            <template v-for="(item,index) in this.$router.options.routes">
                                <template v-if="item.navMenu">
                                    <el-submenu :index="index" :key="index">
                                    <template slot="title">
                                        <i class="el-icon-location"></i>
                                        <span>{{item.name}}</span>
                                    </template>
                                        <el-menu-item-group>
                                            <template v-for="(itemC,index) in item.children">
                                                <el-menu-item :key="index" :index="itemC.path">{{itemC.name}}</el-menu-item>
                                            </template>
                                        </el-menu-item-group>
                                    </el-submenu>
                                </template>
                            </template>
                        </el-menu>
                    </el-col>
                </el-row>
            </template>
            <el-main style="background-color: white">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home"
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
</style>