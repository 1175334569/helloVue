<template>
    <el-container class="article_list">
        <el-main class="main">
    <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
            <el-tab-pane label="全部文章" name="first">
                    <blog_table></blog_table>
            </el-tab-pane>
        <el-tab-pane label="已发表" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="草稿箱" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="回收站" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="博客管理" name="fifth">博客管理</el-tab-pane>
        <el-tab-pane label="博客配置" name="sixth">博客配置</el-tab-pane>
    </el-tabs>
        </el-main>
    </el-container>
</template>
<script>
    import BlogTable from '../components/BlogTable'
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                window.console.log(tab, event);
            }
        },
        components:{
            'blog_table':BlogTable,
        }
    };
</script>
<style scoped>
    .article_list > .header {
        background-color: #ececec;
        margin-top: 10px;
        padding-left: 5px;
        display: flex;
        justify-content: flex-start;
    }

    .article_list > .main {
        /*justify-content: flex-start;*/
        display: flex;
        flex-direction: column;
        padding-left: 0px;
        background-color: #fff;
        padding-top: 0px;
        margin-top: 8px;
    }
</style>