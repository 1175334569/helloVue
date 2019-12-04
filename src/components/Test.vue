<template>
    <div>
        <ul>
            <li v-bind:key="item.id" v-for="item in items">{{item}}</li>
        </ul>
        <el-row>
            <el-button type="primary" plain>提交</el-button>
        </el-row>
    </div>
</template>


<script>
    export default {
        name: "test",
        data:function () {
            return {
                items:{
                    age:'1',
                    name:'梁',
                    score:'1111'
                }
            }
        }
    };
</script>

<style scoped>

</style>